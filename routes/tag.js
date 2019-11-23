const express = require('express');
const router = express.Router();
const knex = require('../connect');
const setupPaginator = require('knex-paginator');

setupPaginator(knex);

//Select all tags (returns 15 results per query)
router.get("/tags", (req, res) => {
	knex.select().from('Tag')
		.paginate(15, req.query.page || 1, true)
		.then((tags) => {
		res.status(200);
		res.json({tags});
	});
});

router.get("/tag/:tagname", (req, res) => {
	knex('Tag').select().where('name', req.params.tagname).then((tag) => {
		res.json({tag});
	});
});

// Selects all questions with specified tag name
router.get("/tag/:tagname/questions", (req, res) => {
	// First make a subquery getting question ids with specified tag
	let subquery = knex('Question_Tags').select('question_id').where('tag_name', req.params.tagname);
	// Now use those ids to get questions
	knex('Question').select().whereIn('id', subquery).then((questions) => {
		res.json({questions});
	});
});

module.exports = router;

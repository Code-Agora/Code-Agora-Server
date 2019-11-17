const express = require('express');
const router = express.Router();
const knex = require('../connect');

router.get("/tags", (req, res) => {
	knex('Tag').select().then((tags) => {
		res.json({
			data: tags
		});
	}
	);
});

router.get("/tag/:tagname", (req, res) => {
	knex('Tag').select().where('name', req.params.tagname).then((tag) => {
		res.json({
			data: tag
		});
	}
	);
});

// Selects all questions with specified tag name
router.get("/tag/:tagname/questions", (req, res) => {
	// First make a subquery getting question ids with specified tag
	var subquery = knex('Question_Tags').select('question_id').where('tag_name', req.params.tagname);
	// Now use those ids to get questions
	knex('Question').select().whereIn('id', subquery).then((questions) => {
		res.json({
			data: questions
		});
	}
	);
});

module.exports = router;

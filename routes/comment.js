const express = require('express');
const router = express.Router();
const knex = require('../connect');
const setupPaginator = require('knex-paginator');
setupPaginator(knex);

// Select all comments for a question (15 results per query)
router.get("/comments/:questionId", (req, res) => {
	knex.select().from('_Comment').where('question_id', req.params.questionId)
	.paginate(15, req.query.page || 1, true)
	.then((comments) => {
		res.status(200);
		res.json({comments});
	});
});

module.exports = router;

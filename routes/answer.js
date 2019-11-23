const express = require('express');
const router = express.Router();
const knex = require('../connect');
const setupPaginator = require('knex-paginator');
setupPaginator(knex);

// Select all answers for specified question (15 results per query)
router.get("/answers/:questionId", (req, res) => {
	knex.select().from('Answer').where('question_id', req.params.questionId)
	.paginate(15, req.query.page || 1, true)
	.then((answers) => {
		res.status(200);
		res.json({answers});
	});
});

module.exports = router;

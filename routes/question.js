const express = require('express');
const router = express.Router();
const knex = require('../connect');
const setupPaginator = require('knex-paginator');
setupPaginator(knex);

// Select all questions (15 results per query)
router.get("/questions", (req, res) => {
	knex.select().from('Question')
	.paginate(15, req.query.page || 1, true)
	.then((questions) => {
		res.status(200);
		res.json({questions});
	});
});

// Select a single question based on it's ID
router.get("/question/:id", (req, res) => {
	knex.select().from('Question').where('id', req.params.id)
	.then((question) => {
		res.status(200);
		res.json({question});
	});
});

module.exports = router;

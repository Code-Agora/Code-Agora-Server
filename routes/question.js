const express = require('express');
const router = express.Router();
const knex = require('../connect');

router.get("/questions", (req, res) => {
	knex('Question').select().then((questions) => {
		res.json({
			data: questions
		});
	}
	);
});

router.get("/question/:id", (req, res) => {
	knex('Question').select().where('id', Number(req.params.id)).then((question) => {
		res.json({
			data: question
		});
	}
	);
});

module.exports = router;

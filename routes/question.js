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
	res.json({
		foo: "bar"
	});
});

module.exports = router;

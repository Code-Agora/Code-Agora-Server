const express = require('express');
const router = express.Router();
const knex = require('../connect');

router.get("/answers/:questionId", (req, res) => {
	knex('Answer').select().where('id', Number(req.params.questionId)).then((answers) => {
		res.json({
			data: answers
		});
	}
	);
});

module.exports = router;

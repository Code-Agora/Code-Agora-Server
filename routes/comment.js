const express = require('express');
const router = express.Router();
const knex = require('../connect');

router.get("/comments/:questionId", (req, res) => {
	knex('_Comment').select().where('question_id', Number(req.params.questionId)).then((comments) => {
		res.json({
			data: comments
		});
	}
	);
});

module.exports = router;

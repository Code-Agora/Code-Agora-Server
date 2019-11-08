const express = require('express');
const router = express.Router();
const knex = require('../connect');

router.get("/users", (req, res) => {
	knex('_User').select().then((users) => {
		res.json({
			data: users
		});
	}
	);
});

router.get("/user/:id", (req, res) => {
	knex('_User').select().where('id', Number(req.params.id)).then((user) => {
		res.json({
			data: user
		});
	}
	);
});

// Select all questions by specifed user
router.get("/user/:id/questions", (req, res) => {
	knex('Question').select().where('user_id', Number(req.params.id)).then((questions) => {
		res.json({
			data: questions
		});
	}
	);
});

module.exports = router;

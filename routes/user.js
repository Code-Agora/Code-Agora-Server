const express = require('express');
const router = express.Router();
const knex = require('../connect');
const setupPaginator = require('knex-paginator');
setupPaginator(knex);

//Select all users (returns 15 results per query)
router.get("/users", (req, res) => {
	knex.select().from('_User')
	.paginate(15, req.query.page || 1, true)
	.then((users) => {
		res.status(200);
		res.json({users});
	});
});

//Select Single User
router.get("/user/:id", (req, res) => {
	knex.select().from('_User').where('id', req.params.id)
	.then((user) => {
		res.status(200);
		res.json({user});
	});
});

//Select all questions by specifed user
router.get("/user/:id/questions", (req, res) => {
	knex.select().from('Question').where('user_id', req.params.id)
	.then((questions) => {
		res.status(200);
		res.json({questions});
	});
});

module.exports = router;

const express = require('express');
const router = express.Router();

router.get("/questions", (req, res) => {
	res.json({
		foo: "bar"
	});
});

router.get("/question/:id", (req, res) => {
	res.json({
		foo: "bar"
	});
});

module.exports = router;

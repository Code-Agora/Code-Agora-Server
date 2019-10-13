const express = require('express');
const router = express.Router();

router.get("/users", (req, res) => {
	res.json({
		foo: "bar"
	});
});

router.get("/user/:id", (req, res) => {
	res.json({
		foo: "bar"
	});
});

module.exports = router;

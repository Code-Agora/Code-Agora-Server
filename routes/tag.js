const express = require('express');
const router = express.Router();

router.get("/tags", (req, res) => {
	res.json({
		foo: "bar"
	});
});

router.get("/tag/:id", (req, res) => {
	res.json({
		foo: "bar"
	});
});

module.exports = router;

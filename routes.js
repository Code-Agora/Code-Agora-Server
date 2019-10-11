const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
	res.json({
		message: "Hello, I am Code Agora"
	});
});

router.get("/about", (req, res) => {
	res.json({
		message: "This route will eventually celebrate who we are and what we do"
	});
});

module.exports = router;

const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
	res.json({
		message: "Hello, I am Code Agora"
	});
});

module.exports = router;

const express = require('express');
const router = express.Router();

router.get("/answers/:questionId", (req, res) => {
	res.json({
		foo: "bar"
	});
});

module.exports = router;

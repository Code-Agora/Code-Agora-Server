const express = require('express');
const router = express.Router();

router.get("/comments/:questionId", (req, res) => {
	res.json({
		foo: "bar"
	});
});

module.exports = router;

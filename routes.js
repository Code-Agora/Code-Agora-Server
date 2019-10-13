const express = require('express');
const router = express.Router();
//const swaggerUi = require("swagger-ui-express");
//const swaggerDocument = require("./swagger.json");

//router.use("/api-docs", swaggerUi.serve);
//router.get("/api-docs", swaggerUi.setup(swaggerDocument));

router.get("/", (req, res) => {
	res.json({
		message: "Hello, I am Code Agora"
	});
});

router.get("/about", (req, res) => {
	res.json({
		message: "This route will eventually celebrate who we are and what we do."
	});
});

module.exports = router;

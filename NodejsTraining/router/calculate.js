const express = require("express");
const router = express.Router();
const calculate = require("../controller/calculateController");

router.post("/add", calculate.addition);
router.post("/sub", calculate.subtract);
router.post("/mul", calculate.multiply);
router.post("/div", calculate.division);

module.exports = router;

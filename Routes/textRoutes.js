const express = require("express");
const { textController } = require("../Controller/textController");
const router = express.Router();

router.get("/", textController);

module.exports = router;

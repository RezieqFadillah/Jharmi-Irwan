const express = require("express");
const router = express.Router();
const { addTips } = require("../controllers/dokter.controller");
  
router.post('/', addTips);

module.exports = router;
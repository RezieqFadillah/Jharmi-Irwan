const express = require("express");
const router = express.Router();
const { getAllTips } = require("../controllers/dokter.controller");
  
router.get('/', getAllTips);
  
module.exports = router;
const express = require("express");
const router = express.Router();
const { getAllArtikel } = require("../controllers/artikel.controller");
  
router.post('/', getAllArtikel);
  
module.exports = router;
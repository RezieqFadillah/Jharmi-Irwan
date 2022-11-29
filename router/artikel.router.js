const express = require("express");
const router = express.Router();
const { getArtikelById } = require("../controllers/artikel.controller");
  
router.get('/', getArtikelById);
  
module.exports = router;
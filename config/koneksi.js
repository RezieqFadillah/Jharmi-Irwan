const mongoose = require('mongoose')
require('dotenv').config()

const URL = process.env.URL_DB
const db = mongoose.connect(URL)

module.exports = db
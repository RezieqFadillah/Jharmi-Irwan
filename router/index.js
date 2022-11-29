const express = require('express')
const router = express.Router()

const homepageRouter = require('./homepage.router')
const loginRouter = require('./login.router')
const registerRouter = require('./register.router')

// user
const newsRouter = require('./news.router')

// admin
const artikelRouter = require('./artikel.router')
const buatartikelRouter = require('./buatartikel.router')
const tipsRouter = require('./tips.router')
const kesehatanlRouter = require('./kesehatan.router')

const token = require('../middleware/verify')

router.use('/', homepageRouter);
router.use('/login', loginRouter);
router.use('/register', registerRouter)
router.use('/news', token, newsRouter)
router.use('/artikel', token, artikelRouter)
router.use('/buatartikel', token, buatartikelRouter)
router.use('/tips', token, tipsRouter)
router.use('/kesehatan', token, kesehatanlRouter)

module.exports = router
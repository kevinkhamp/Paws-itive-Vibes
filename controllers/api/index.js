const router = require('express').Router()
const donationsRoute = require('./donations')

router.use('/donations', donationsRoute)

module.exports = router
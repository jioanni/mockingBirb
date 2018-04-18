const router = require('express').Router()

//routing middleware
router.use('/mock', require('./mock'))
router.use('/user', require('./user'))

module.exports = router
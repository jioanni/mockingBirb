const router = require('express').Router();

router.get('/', (req, res, next) => {
    res.send("HI HI HI")
})

module.exports = router
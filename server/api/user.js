const router = require('express').Router();

router.post('/register', (req, res, next) => {
    const userName = req.body.userName
    const password = req.body.password
  
    res.send(userName + ' ' + password)
})

module.exports = router
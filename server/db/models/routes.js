const Sequelize = require('sequelize');
const db = require('../db')


const Route = db.define('route', {
    address: {
        type: Sequelize.STRING
    },
    responseBody: {
        type: Sequelize.STRING
    }
})

module.exports = Route
const Sequelize = require('sequelize')


const db = new Sequelize( 
    {   
    dialect: 'postgres',
    logging: false
    }
);



module.exports = db;
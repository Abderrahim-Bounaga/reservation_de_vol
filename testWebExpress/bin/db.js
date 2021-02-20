const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('datatest', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})



module.exports = sequelize;
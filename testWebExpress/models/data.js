const { Sequelize, DataTypes, Model} = require('sequelize');
const db = require('../bin/db');

const  Data = db.define('Data', {
    firstName:{
        type : DataTypes.STRING,
        allowNull: false
    },
    lastName:{
        type: DataTypes.STRING,
    },
    Email:{
        type: DataTypes.STRING
    }
});
Data.sync()

module.exports = Data;
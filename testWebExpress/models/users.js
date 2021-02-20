const { Sequelize, DataTypes, Model} = require('sequelize');
const db = require('../bin/db');

const  User = db.define('User', {
    firstName:{
        type : DataTypes.STRING,
        allowNull: false
    },
    lastName:{
        type: DataTypes.STRING,
    },
    Nationality:{
        type: DataTypes.STRING,
    },
    City:{
        type: DataTypes.STRING,
    },
    Email:{
        type: DataTypes.STRING,
    },
    NumberPhone:{
        type: DataTypes.INTEGER,
    },
    Password:{
        type: DataTypes.STRING,
    },
});
User.sync()

module.exports = User;
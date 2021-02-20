const { Sequelize, DataTypes, Model} = require('sequelize');
const db = require('../../bin/db');

const  Vol = db.define('Vols', {
    Aname:{
        type : DataTypes.STRING,
        allowNull: false
    },
    Pname:{
        type: DataTypes.STRING,
    },
    Price:{
        type: DataTypes.INTEGER,
    },
    Number:{
        type: DataTypes.INTEGER,
    },
    Date:{
        type: DataTypes.DATE,
    }
});
Vol.sync()

module.exports = Vol;
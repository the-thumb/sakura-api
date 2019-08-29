var Sequelize = require("sequelize");

var db = require('./index'),
    sequelize = db.sequelize;
    Sequelize = db.Sequelize;

module.exports = function(sequelize, DataType){
    const Messages = sequelize.define('Messages', {
        userInit: {
            type: sequelize.INTEGER,
            allowNull: false

        },
        userReceiving: {
            type: sequelize.INTEGER,
            allowNull: false

        },
        message: {
            type: sequelize.TEXT,
            allowNull: false

        }

    },
        {
            freezeTableName: true
        });

    Messages.sync().then(()=>{
        Messages.create({
            userInit: 1,
            userReceiving: 2,
            message: "hi bob how are you?"
        })
        Messages.create({
            userInit: 2,
            userReceiving: 1,
            message: "pretty good, how do I eat a potato?"
        })
        Messages.create({
            userInit: 1,
            userReceiving: 3,
            message: "Bob is a bit weird."
        })
    });

};
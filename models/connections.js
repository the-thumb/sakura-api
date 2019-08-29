const Sequelize = require("sequelize");
const sequelize = require("../config/connection.js");

const Connections = sequelize.define('Connections',{
    userInitiating: {
        type: Sequelize.INTEGER,
        allowNull: false

    },
    userReceiving:{
        type: Sequelize.INTEGER,
        allowNull: false


    },
    accepted: {
        type: Sequelize.BOOLEAN,
        default: false
    }
},
{
    freezeTableName: true
});

Connections.sync().then(()=>{
Connections.create({
    userInitiating: 3,
    userReceiving: 2,
    accepted: false
})
Connections.create({
    userInitiating: 1,
    userReceiving: 2,
    accepted: false
})
Connections.create({
    userInitiating: 1,
    userReceiving: 4,
    accepted: true
})
});

module.exports = Connections;
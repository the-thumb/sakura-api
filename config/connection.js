var mysql = require('mysql');
var Sequelize = require("sequelize");
var connection;
const jawsdb = process.env.JAWSDB_URL;

connection = mysql.createConnection(process.env.JAWSDB_URL);
const sequelize = new Sequelize(jawsdb);
console.log('running jawsDB', jawsdb);
/*} else {
  const sequelize = new Sequelize("gardening_db", "root", "password", {
    host: "localhost",
    dialect: "mysql",
    port: 3001
  })*/
  sequelize
  .authenticate()
  .then(() => {
  })
  .catch(err => {
    console.log(err)
  });



// Exports the connection for other files to use
module.exports = sequelize;


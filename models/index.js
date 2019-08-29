"use strict";

var Sequelize = require("sequelize");
let models = {};
var db = {};


if (process.env.JAWSDB_URL && process.env.JAWSDB_URL.trim() !== "") {
  var sequelize = new Sequelize({
    "use_env_variable": "JAWSDB_URL",
    "dialect": "mysql"
  });
} else {
  var sequelize = new Sequelize("database", "user", "password", {
    "host": "127.0.0.1",
    "dialect": "mysql"
  });
};


function getModels (config, force = false) {
  if (Object.keys(models).length && !force) {
    return models;
  };

let modules = [
  require('./messages'),
  require('./user-profiles')
];

models.forEach(file => {
  const model = module(sequelize, Sequelize, config);
  models[model.name] = model;
});
  
  Object.keys(models).forEach((key) => {
    if ('associate' in models[key]) {
      models[key].associate(models);
    }
  });

    models.sequelize = sequelize;
    models.Sequelize = Sequelize;

    return models;
  };


module.exports = db;
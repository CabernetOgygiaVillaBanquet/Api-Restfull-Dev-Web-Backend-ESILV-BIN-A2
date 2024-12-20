const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DATABASE_URL);

const User = require('./user');

const db = {
  Sequelize,
  sequelize,
  User
};

module.exports = db;

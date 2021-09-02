const Sequelize = require("sequelize");

const db = new Sequelize("postgres://postgres:root@localhost:5432/auth");

module.exports = { db: db, Sequelize: Sequelize };

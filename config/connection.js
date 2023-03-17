const sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new sequelize(
    process.env.DB_NAME,
    process.env.DB_User,
    process.env.DB_PASSWORD,
    {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306,
    }
);

module.exports = sequelize;
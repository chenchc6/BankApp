const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('bank_db', 'root', 'Aa23271177', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;

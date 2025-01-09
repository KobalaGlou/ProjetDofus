const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mssql'
});

sequelize.authenticate()
    .then(() => console.log('Connexion à la base de données réussie'))
    .catch(err => console.error('Erreur de connexion à la base de données:', err));

module.exports = sequelize;
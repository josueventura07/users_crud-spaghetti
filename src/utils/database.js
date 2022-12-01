const { Sequelize } = require('sequelize')

const db = new Sequelize ({
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'jb1786',
    database: 'users-spaghetti'
})


module.exports = db

const dbConfig = require('../config/database')
const {Sequelize , DataTypes} = require('sequelize')

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {

    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorAliases: false,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle,
    }

})

const db = {}

db.sequelize = sequelize
db.Sequelize = Sequelize

db.products = require('./product.Model')(sequelize,DataTypes)
db.users = require('./user.Model')(sequelize,DataTypes)


db.sequelize.sync({force :false}).then(()=>{
console.log("drop and re-sync db.");
})
module.exports = db
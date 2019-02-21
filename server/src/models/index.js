const fs = require('fs')    //used for connecting to our database, loads in configurations and read files 
const path = require('path')      //from the models folder and loads into sequelize for later use
const Sequelize = require('sequelize')
const config = require('../config/config')
const db = {}

const sequelize = new Sequelize(
    config.db.database,
    config.db.user,
    config.db.password,
    config.db.options
)

fs
  .readdirSync(__dirname)
  .filter((file) =>
    file !== 'index.js'
  )
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file))
    db[model.name] = model
  })

  db.sequelize = sequelize
  db.Sequelize = Sequelize

module.exports = db

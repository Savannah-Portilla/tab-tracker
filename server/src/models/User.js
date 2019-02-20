module.exports = (sequelize, DataTypyes) =>
  sequelize.define('User', {
      email: {
          type: DataType.STRING,
          unique: true
      },
      password: DataTypes.STRING
  })

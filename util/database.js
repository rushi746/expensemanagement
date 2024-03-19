const Sequelize = require('sequelize')

const sequelize =  new Sequelize('expense-tracker','root','Shruti@2105',{
    dialect:'mysql',
    host: 'localhost'
})

module.exports= sequelize

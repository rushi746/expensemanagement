const Sequalize = require('sequelize')

const sequalize = require('../util/database')

const User = sequalize.define('user',{
    name:{
        type:Sequalize.STRING,
        allowNull:false,
    },
    email:{
        type:Sequalize.STRING,
        allowNull:false,
        primaryKey:true
    },
    password:{
        type:Sequalize.STRING,
        allowNull:false
    }
    
})

module.exports = User
const express = require('express')
const userRoutes = require('./routes/user')
const bodyParser = require('body-parser')
const sequelize = require('./util/database')
const app = express()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json())

app.use(userRoutes)




sequelize
  .sync({
    force:false
  })
  .then(result => {
    // console.log(result);
    app.listen(2000);
  })
  .catch(err => {
    console.log(err);
  });

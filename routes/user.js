const express = require('express')
const path = require('path')
const router = express.Router()
const userController = require('../controller/user')
router.get('/user',(req,res)=>{
    res.sendFile(path.join(__dirname,'../index.html'))
})

router.post('/sign-in',userController.addUser)

// router.post('/sign-in',(req,res)=>{
//     const userData = req.body;
//     res.status(200).send('User signed up successfully!');

// })

module.exports = router;
const userModel = require('../model/user')
exports.addUser =(req,res)=>{
    const{name,email,password} = req.body

    if(!req.body.name){
        throw new Error('Name is Mandatory')
    }

     userModel.create({
        name:name,
        email:email,
        password:password
    })
    .then(result=>{
        console.log(result)
        res.status(201).json({
            success:true,
            data:result
        })
    }).catch(err => console.log(err))
    


}


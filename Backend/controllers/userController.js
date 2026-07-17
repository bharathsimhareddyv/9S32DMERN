const User = require('../models/UserSchema')

const register =async(req,res)=>{
     try {
        const user = await User.create(req.body)
        res.status(201).json(user)
     } catch (error) {
        res.status(400).json(error)
     }
}



module.exports ={register}
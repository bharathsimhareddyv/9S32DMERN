const User = require('../models/UserSchema')

const register =async(req,res)=>{
     try {
        const user = await User.create(req.body)
        res.status(201).json(user)
     } catch (error) {
        res.status(400).json(error)
     }
}

const login =async(req,res) =>{
    const {email , password} = req.body
    try {
        const existUser = await User.findOne({email , password})
        if(!existUser){
            return res.status(400).json("No User found Please Register or wrong Credintials")
        }
        

        const user = await User.findOne({email , password})
        res.status(200).json({message:"Login Sucessfull" , id:user._id , role:user.role})
    } catch (error) {
        res.status(400).json({message:"Wrong Credentials" , error})
    }
}


const dashboard =async(req,res)=>{
try {
    const user = await User.findById(req.params.id)
    res.status(200).json(user)
} catch (error) {
    res.status(400).json(error)
}
}


module.exports ={register ,login ,dashboard}
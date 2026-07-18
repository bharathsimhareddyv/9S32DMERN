// const verifyToken =(req,res,next)=>{
// try {
//     const token = req.headers.token
// if(!token){
//     return res.status(401).json("Provide token or Invalid Token")
// }
// if(token != "12345"){
//     return res.status(400).json({message:"Need a Valid token"})
// }
// next()
// } catch (error) {
//     res.status(400).json(error)
// }
// }
const jwt = require('jsonwebtoken')
require('dotenv').config()

const verifyToken =(req,res,next)=>{
    try {
const authHeader = req.headers.authorization || req.headers.Authorization

if(!authHeader){
    return res.status(401).json({message:"Unauthorized"})
}
       const token = authHeader.split(" ")[1] 
       if(!token){
        return res.status(400).json({message:"Invalid Token"})
       }
       const payload = jwt.verify(token , process.env.JWT_SECRET)
       req.user = payload

       next()
    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports ={verifyToken}
const mongoose = require('mongoose')

const userSchema =new mongoose.Schema({
    name :{
        type:String,
        required:true
    },
    email:{
        type:String ,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true,
        min:8
    },
    role:{
        type:String,
        enum:["USER" ,"ADMIN","ORGANIZER"],
        default:"USER"
    }
})


module.exports=  mongoose.model("Users" ,userSchema)
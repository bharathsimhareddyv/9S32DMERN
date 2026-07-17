const route = require('express').Router()
const {register , login,dashboard} = require('../controllers/userController')

route.post("/register" , register)
route.post("/login" , login)
route.get('/dashboard/:id' , dashboard )


module.exports = route
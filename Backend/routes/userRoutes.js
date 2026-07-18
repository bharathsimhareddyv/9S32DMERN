const route = require('express').Router()
const {register , login,dashboard} = require('../controllers/userController')
const {verifyToken} = require('../middleware/authMiddleware')

route.post("/register" , register)
route.post("/login" , login)
route.get('/dashboard/:id' ,verifyToken, dashboard )


module.exports = route
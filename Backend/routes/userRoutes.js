const route = require('express').Router()
const {register} = require('../controllers/userController')

route.post("/adduser" , register)


module.exports = route
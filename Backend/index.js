// const http = require('http')
// const server = http.createServer((req,res)=>{
// res.end("Server Started at port 3000")
// })
// server.listen(3000,()=>{
//     console.log("Server Connected")
// })
// app.get("/",(req,res)=>{
// res.send("Server Started on port 4000")
// })

// app.get("/about",(req,res)=>{
// res.send("This is About Section")
// })

// app.get("/bharath",(req,res)=>{
// res.send("This is Bharath Route")
// })

// app.get("/products/:productId",(req,res)=>{
// res.send(`the Product id is ${req.params.productId}`)
// })

const express = require('express')
const mongoose = require('mongoose')
const route = require('./routes/userRoutes')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())

app.use("/api" , route)

mongoose.connect('mongodb://localhost:27017/9S32D')
.then(()=>console.log("DataBase Connected"))
.catch((err)=>console.log(err))

app.listen(4000,()=>{
console.log("Server Started")
})
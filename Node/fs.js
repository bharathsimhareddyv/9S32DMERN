const fs = require('fs')

// fs.writeFile('hello.txt','Hello this is Bharath' ,(data , err)=>{
//   console.log("Sucessfully Added")
// } )

// fs.appendFile('hello.txt','Append Anything' ,(data , err)=>{
//   console.log("Sucessfully Added")
// } )

// fs.readFile('hello.txt' ,'utf8' ,(data , err)=>{
// if(err){
// console.log(err)
// }
//     console.log(data)
// })

// fs.rename('hello.txt' ,'bharath.txt' ,(err)=>{
// if(err){
//     console.log(err)
// }
// })

// fs.mkdir('hello',(err)=>{
// if(err){
// console.log(err)
// }
// })

fs.rmdir('hello',(err)=>{
    console.log(err)
})
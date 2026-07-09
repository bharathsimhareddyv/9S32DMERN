// let a=10
// let b = 20
// console.log(sum(1,2))

//Normal Function

// function sum(a,b){
//     return a+b
// }

// console.log(x)
//  let x= 10

// Function Expression
// const sum = function(){
//  return a+b
// }
  
//Multi parameter

// function sum(a,b){
//     return a+b
// }

// Default parameter
// let role = "User"

// function User(role){

// }

//Arrow Functions 

// const sum =(a,b)=>{
// returna+b
// }

//Callback Functions

// function sum(){
//     return a+b
// }

// function sumAll(a,b,sum){
//   return  sum(a,b)
// }

// sumAll(1,2,sum())

//immediate invoke function Expression

// (function sum(){
//    return a+b
// })()


// function sum(a,b){
//     return a+b
// }

// function sumAll(a,b,sum1){
//   return sum1(a,b)
// }

// console.log(sumAll(10,30,sum))


// const array = ["Bharath" ,"Ravi","Aditya "]
//  array.forEach((name)=>{
//     console.log(name)
//  }
// )
// console.log("This is from map")
// array.map((ele)=>{
//     console.log(ele)
// })

// const students=[{name:"Abhishek" ,roll:1234} ,{name:"Bisal" ,roll:5678}]

// students.map((student)=>{
//     console.log(student.roll)
// })

// const Datas = fetch('https://jsonplaceholder.typicode.com/users')
// .then((res)=>res.json())
// .then((data)=>
// data.map((user)=>{
//  console.log("User Email:" ,user.address.street)
// })
// )

//find Higher order collection

// const array =[10,20,44,55,78,44,26]

// const fineElement = array.find((ele)=>{
// // console.log(ele>50)
// return ele>50
// })
// console.log(fineElement)

// const filterElements = array.filter((ele)=>{
// return ele>50
// })
// console.log(filterElements)

// const students =[
//     {name:"Bisal",project:"House Management",status:"pending"},
//     {name:"Adarsh",project:"Ums Management",status:"approved"},
//     {name:"Ravi",project:"tree Management",status:"approved"},
//     {name:"Raju",project:"Colony Management",status:"rejected"},
// ]

// const approved = students.filter((student)=>{
//  if(student.status === "approved"){
//     //   console.log(student)
//       return student
//  }
// })

// console.log(approved)

// let a =10
// let b= 20

// console.log(a>b)
// console.log(a)


const array =[10,20,44,55,78,44,26]

const sum = array.reduce((a,s)=>{
   return a+s
},0)
console.log(sum)

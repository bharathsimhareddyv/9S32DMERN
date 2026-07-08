// const studentName = "Aditya"
// const phone = 53465454

// const studentName1 = "Bharath"
// const phone1 = 646454354


// const studentName2 = "Bharath"
// const phone2 = 35448484



const Aditya = {
    phone:789555,
    address: "24th street Haryana",
    isGraduated : true
}
// `console.log(Aditya)`


// const Bharath= {
//     phone:7987986,
//     address: "24th street Punjab",
//     isGraduated : false,
//     greet:function greet(){
//         console.log("hello")
//     }
// }
// console.log(Bharath.greet)


// Bharath["isGraduated"] = true
// Bharath["Regno"]=12345
// delete(Bharath["phone"])

// console.log(Bharath)


// Arrays

// const arr = [10,20,30]


// arr.push(40)
// console.log(arr)
// arr.push(50)
// arr.pop()
// console.log(arr)
// arr.unshift(20)
// arr.shift()
// console.log(arr)

// const hello ="Bharath Reddy"
// console.log(hello.split(" "))

// const arr =[10,20,30,40,50,60,70]
//  console.log(arr.splice(1,3)) 
// //  console.log(arr1)
// console.log(arr)
//  console.log(arr.slice(2,3))
// console.log(arr)


// arr.forEach((ele ,index)=>{
// console.log({ele ,index})
// })

// arr.forEach((ele)=>{
//     console.log(ele*2)
// })
// console.log(arr)

// arr.map((ele)=>{
//     console.log(ele*2)
// })
// console.log(arr)

//  const names =["Bharath" , "ravi" ,"Raju"]

//  names.map((name)=>{
//      console.log(`${name}`)
//  })


const arr =[10,20,30,40,50,60,70]


// arr.find((greater)=>{
//    console.log( greater>=60)
// })

const fil = arr.filter((ele)=>{
    return ele>=40
})

console.log(fil)
const large = arr.find((ele)=>{
    return  ele>30
})
console.log(large)







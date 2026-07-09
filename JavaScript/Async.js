// function getData(dataId , getNextData){
//  setTimeout(()=>{
//     console.log("DataId",dataId)
//     if(getNextData){
//         getNextData()
//     }
//  },2000)
// }
// getData(1 ,()=>{
//     getData(2 ,()=>{
//         getData(3,()=>{
//             getData(4,()=>{
//                 getData(5,()=>{
//                     getData(6,()=>{
//                         getData(7)
//                     })
//                 })
//             })
//         })
//     })
// })

// Examples of Promises
function getData(dataId){
 return new Promise((resolve, reject) => {
       console.log("Data Id:" ,dataId) 
         resolve("UnFulfilled")
 })
}

// getData(1)
// .then(()=>getData(2))
// .then(()=>getData(3))
// .catch((err)=>{console.log(err)})

async function getParams() {
    await getData(1)
    await getData(2)
    await getData(3)
}
getParams()
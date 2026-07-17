import React, { useEffect, useState } from 'react'

const UseEffect = () => {
const[data,setData]=useState([])

useEffect(()=>{
    const result = fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then((datas)=>setData(datas))
},[])

console.log(data)
  return (
    <div>
      This is example of useeffect
    </div>
  )
}

export default UseEffect

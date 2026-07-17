import React, { useContext, useEffect, useRef, useState } from 'react'
import { GlobalContext } from '../Context/Varibale'
const PrevCount = () => {
    const name1 = useContext(GlobalContext)
    const[count , setCount] = useState(100)
const prevCount = useRef()

useEffect(()=>{
    prevCount.current =count
},[count])
console.log(prevCount)

  return (
    <div>
        <p>my name is {name1}</p>
        <p>Count:{count}</p>
        <p>Previous Count :{prevCount.current}</p>
        <button onClick={()=>setCount(count+1)}>Inc</button>
      <h1>to Store prev count using useref</h1>
    </div>
  )
}

export default PrevCount

import React, { useEffect, useState } from 'react'

const UseState = () => {
  const [count,setCount]=useState(0)
  const[type , setType]=useState("Even")
  const[showPassword ,setShowPassword] = useState(false)
  const[inputPassword , setInputPassword]= useState("")

  const inc =()=>{
setCount(count+1)
  }
 const reset =()=>{
    setCount(0)
 }

 useEffect(()=>{
  if(count%2 === 0){
 setType("Even")
  }else{
    setType("Odd")
  }
 },[count])

  return (
    <div>

        <p>Count :{count}</p>
        <p>Type:{type}</p>
        <button onClick={inc}>Bharath</button>
      <h1>This is an Example of use State</h1>

      <input type={showPassword?"text":"password"} value={inputPassword} onChange={(e)=>setInputPassword(e.target.value)} />
      <button onClick={()=>setShowPassword(prev=>!prev)}>{showPassword?"Hide":"Show"}</button>
    </div>
  )
}

export default UseState

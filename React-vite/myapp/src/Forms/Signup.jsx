import React, { useState } from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { GlobalContext } from '../Context/Varibale'


const Signup = () => {
  const name1= useContext(GlobalContext)
const navigate = useNavigate()

  const[name,setName]=useState("")
  const[email,setEmail]=useState("")
  const[password , setPassword]=useState("")


  const formSubmit =(e)=>{
     e.preventDeafult()

     const data = {
      name , email , password
     }

     localStorage.setItem("User Data" , JSON.stringify(data))
     setName()
     setEmail()
     setPassword()
  }

  return (
    <div>
      <p>my name is {name1}</p>
      <h1>Signup From</h1>
   <form action="" onSubmit={formSubmit}>
    
       <label htmlFor="">Name :</label>
      <input type="text" name="" id="" value={name} onChange={(e)=>setName(e.target.value)} />
      <br />
      <label htmlFor="">Email :</label>
      <input type="email" name="" id=""  value={email} onChange={(event)=>setEmail(event.target.value)}/>
      <br />
      <label htmlFor="">Password :</label>
      <input type="password" name="" id="" value={password} onChange={(e)=>setPassword(e.target.value)}/>    
<br />
      <button type="submit">Submit</button> 
    </form> 
    <button onClick={()=>navigate("/useeffect")}>Navigate to useeffect</button>
    </div>
  )
}

export default Signup

import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
const[email , setEmail]= useState("")
const[password,setPassword]=useState("")

const login =async(e)=>{
    e.preventDefault()
try {
    const person = await axios.post('http://localhost:4000/api/login',{
        email, password
    })

    localStorage.setItem("role" , person.data.role)
    localStorage.setItem("token" ,person.data.token)
    localStorage.setItem("id" ,person.data.id)
    if(person.data.role ==="ADMIN"){
       navigate('/admindashboard')
    }
    if(person.data.role ==="USER"){
       navigate('/userdashboard')
    }
    if(person.data.role === "ORGANIZER"){
    navigate('/orgdashboard')
    }
} catch (error) {
    console.log(error)
}
}

  return (
    <div>
      <h1>Login Page</h1>
      <form action="" onSubmit={login}>
        <label htmlFor="">Email</label><br />
        <input type="email" name="" id="" 
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        /><br />
        <label htmlFor="">Password</label><br />
        <input type="password" name="" id="" 
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        /><br />
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default Login

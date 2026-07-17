import React, { useState } from "react";
import axios from 'axios'

const Register = () => {
const[name , setName]=useState("")
const[email , setEmail]= useState("")
const[password , setPassword]=useState("")
const[role , setRole]=useState("USER")

const register =async(e)=>{
e.preventDefault()
try {
    const user = await axios.post('http://localhost:4000/api/register',{
        name, email, password,role
    })
setName("")
setEmail("")
setPassword("")
setRole("")
alert("Data Saved Sucessfully")
} catch (error) {
    console.log(error)
}


}

  return (
    <div>
      <h1>Registration Page</h1>

      <form action="" onSubmit={register}>

   <label>Name</label>
        <br />
        <input type="text" placeholder="Enter your name" 
        value={name} 
        onChange={(e)=>setName(e.target.value)}/>
    
      <br />
        <label>Email</label>
        <br />
        <input type="email" placeholder="Enter your email"
        value={email} 
        onChange={(e)=>setEmail(e.target.value)}/>
      <br />
        <label>Password</label>
        <br />
        <input type="password" placeholder="Enter your password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)} />
      <br />
        <label>Role</label>
        <br />
        <select defaultValue="USER" value={role} onChange={(e)=>setRole(e.target.value)}>
          <option value="" disabled>
            Select Role
          </option>
          <option value="ADMIN">ADMIN</option>
          <option value="USER">USER</option>
          <option value="ORGANIZER">ORGANIZER</option>
        </select>
      <br />

      <button type="submit">Register</button>

      </form>
     
    </div>
  );
};

export default Register;
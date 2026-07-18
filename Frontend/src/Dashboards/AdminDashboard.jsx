import React ,{useState,useEffect}from 'react'
import axios from 'axios'

const AdminDashboard = () => {
     const[data,setData]=useState({})
    
        const uid = localStorage.getItem("id")
        const token = localStorage.getItem("token")
        const fetchUser =async()=>{
    try {
        const user = await axios.get(`http://localhost:4000/api/dashboard/${uid}`,{
            headers : {
                Authorization :`Bearer ${token}`
            }
        })
        setData(user.data)
    
    
    } catch (error) {
        console.log(error)
    }
        }
    
        useEffect(()=>{
            fetchUser()
        },[])
    
  return (
    <div>
            <h1>Welcome {data.role}</h1>
      <p>Name : {data.name}</p>
      <p>Email : {data.email}</p>
     
    </div>
  )
}

export default AdminDashboard

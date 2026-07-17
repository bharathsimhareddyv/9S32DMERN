import React from 'react'

const Child = ({assets ,students,users , message}) => {
  return (
    <div>
      <p>Land is :{assets}</p>
      <p>Objests are :{students.name} - {students.address} - {students.grade}</p>
    <h3>Array Users</h3>
      <div>
        {
           users.map((user)=>{
               return(
                <>
                <p>{user}</p>
                </>
               )
           }) 
        }
      </div>
      <button onClick={message}>Greet</button>
    </div>
  )
}

export default Child

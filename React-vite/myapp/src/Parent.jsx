import React from 'react'
import Child from './Child'

const Parent = () => {

    const land = "9 Acres"
    const student ={
        name:"Bisal",
        grade:"A",
        address:"Punjab"
    }
    const users =["rahul","raj" , "rishi"]

    function greet(){
        alert("hi")
    }
  return (
    <div>
      <h1>This is parent compo</h1>
      <Child assets={land} students={student} users={users} message={greet}/>
    </div>
  )
}

export default Parent

import React from 'react'
import './Person.css'
const Person =(props) => {
  return(
    <div className="Person">
      <p onClick={props.click}>My name is {props.name}, i am {props.age} years old!</p>
      <input type="text" onChange={props.change} value={props.name}/>
    </div>
  )
}

export default Person
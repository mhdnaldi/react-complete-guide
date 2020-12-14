import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
  width: 300px;
  text-align: center;
  border: 1px solid #eee;
  box-shadow: 2px 3px 5px #ccc;
  margin: 10px auto;
  padding: 10px
`

const StyledButton = styled.button`
 background-color: tomato;
 padding: 10px 20px;
 margin: 0 10px;
 color: #fff;
 border: 1px solid tomato;
 transition: 0.3s;
 
 &:hover {
   color: #111;
   background-color: red;
 }
`

const Person = props => {
  return(
    <StyledDiv>
      <p>Hi my name is {props.name} i am {props.age}</p>
      <input type='text' onChange={props.changed}/>
      <StyledButton onClick={props.delete}>Delete</StyledButton>
    </StyledDiv>
  )
}

export default Person
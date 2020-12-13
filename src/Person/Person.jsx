import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
  width: 60%;
  margin: 10px auto;
  text-align: center;
  padding: 16px;
  border-color: 1px solid #eee;
  box-shadow: 2px 3px #ccc;
  cursor: pointer;

  @media (max-width: 600px) {
    background-color: red
  }
`

const StyledButton = styled.button`
  background-color: red;
  padding: 10px;
  color: #fff;
  margin: 0 10px;
`

const Person = props => {
  return(
    <StyledDiv>
      <p>Hi my name is {props.name} i am {props.age}</p>
      <input onChange={props.change}/>
      <StyledButton onClick={props.delete}>
         Delete
      </StyledButton>
    </StyledDiv>
  )
}

export default Person
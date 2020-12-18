import React, {useEffect}from 'react' 
import styled from 'styled-components'
import './Cockpit.css'

const Cockpit = (props) => {

  useEffect(() => {
    setTimeout(() => {
      console.log('ok')
    }, 100);
  },[]) // FOR HTTP REQUEST

  let style = [];
  if (props.persons.length <= 2) {
    style.push("red");
  }
  if (props.persons.length <= 1) {
    style.push("bold");
  }

  const StyledButton = styled.button`
  background-color: ${(props) => (props.alt ? "red" : "blue")};
  padding: 10px 20px;
  margin: 0 10px;
  color: #fff;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: ${(props) => (props.alt ? "tomato" : "aqua")};
    color: #111;
  }
`;
  return(
    <div>
      <h1 className={style.join(" ")}>Team Kakashi</h1>
      <StyledButton
      alt={`${props.showPersons}`}
      onClick={props.show}
    >
      Show
    </StyledButton>
    </div>
  )
}

export default React.memo(Cockpit) // RECOMMEND USING REACT MEMO FOR FUNCTIONAL COMPONENTS FOR MEMORY EFFICIENCY
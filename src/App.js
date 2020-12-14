import React, { Component } from "react";
import "./App.css";
import styled from "styled-components";
import Person from "./Person/Person";

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

class App extends Component {
  state = {
    persons: [
      { id: "jsdhfdfhjk", name: "Naruto", age: 20 },
      { id: "jasdhfjk", name: "Sasuke", age: 21 },
      { id: "asdasd", name: "Sakura", age: 21 },
    ],
  };

  showPersons = false;

  showPersonsHandler = () => {
    let isShow = this.state.showPersons;
    this.setState({ showPersons: !isShow });
  };

  deletePersonHandler = (index) => {
    const person = [...this.state.persons];
    person.splice(index, 1);
    this.setState({ persons: person });
  };

  changedNameHandler = (e, id) => {
    const personIndex = this.state.persons.findIndex((person) => {
      return id === person.id;
    });
    const person = { ...this.state.persons[personIndex] };
    person.name = e;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: persons });
  };

  render() {
    let persons = null;
    let style = [];
    if (this.state.persons.length <= 2) {
      style.push("red");
    }
    if (this.state.persons.length <= 1) {
      style.push("bold");
    }

    if (this.state.showPersons) {
      persons = this.state.persons.map((person, index) => {
        return (
          <Person
            name={person.name}
            age={person.age}
            key={index}
            changed={(event) =>
              this.changedNameHandler(event.target.value, person.id)
            }
            delete={() => this.deletePersonHandler(index)}
          />
        );
      });
    }
    return (
      <div className="App">
        <h1 className={style.join(" ")}>Team Kakashi</h1>
        <StyledButton
          alt={`${this.state.showPersons}`}
          onClick={this.showPersonsHandler}
        >
          Show
        </StyledButton>
        {persons}
      </div>
    );
  }
}

export default App;

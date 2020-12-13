import React, { Component } from "react";
// import Radium, { StyleRoot } from "radium";
import styled from "styled-components";
import "./App.css";
import Person from "./Person/Person";

const StyledButton = styled.button`
  background-color: ${(props) => (props.alt ? "red" : "green")};
  color: white;
  padding: 10px 16px;
  margin: 0 10px;
  &:hover {
    background-color: ${(props) => (props.alt ? "lightgreen" : "salmon")};
    color: #111;
  }
`;

class App extends Component {
  state = {
    persons: [
      { id: "jashdkasjd", name: "Naruto", age: 20 },
      { id: "sdfghjk", name: "Sasuke", age: 21 },
      { id: "sdhaksjdka", name: "Sakura", age: 21 },
    ],
    showPersons: false,
  };

  fullNameHandler = () => {
    this.setState({
      persons: [
        { id: "jashdkasjd", name: "Naruto Uzumaki", age: 20 },
        { id: "sdfghjk", name: "Sasuke Uchiha", age: 21 },
        { id: "sdhaksjdka", name: "Sakura Haruno", age: 21 },
      ],
    });
  };

  showPersonsHandler = () => {
    let show = this.state.showPersons;
    this.setState({ showPersons: !show });
  };

  deletePersonHandler = (id) => {
    let persons = [...this.state.persons];
    persons.splice(id, 1);
    this.setState({ persons: persons });
  };

  inputTextHandler = (event, id) => {
    let personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });
    let person = { ...this.state.persons[personIndex] };
    person.name = event;
    let persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: persons });
  };

  render() {
    let persons = null;
    if (this.state.showPersons) {
      persons = this.state.persons.map((person, index) => {
        return (
          <Person
            name={person.name}
            age={person.age}
            key={index}
            delete={() => this.deletePersonHandler(index)}
            change={(event) =>
              this.inputTextHandler(event.target.value, person.id)
            }
          />
        );
      });
    }

    const classes = [];

    if (this.state.persons.length <= 2) {
      classes.push("red");
    }

    if (this.state.persons.length <= 1) {
      classes.push("bold");
    }

    return (
      <div className="App">
        <h1 className={classes.join(" ")}>Team Kakashi</h1>
        {/* <button style={btn} onClick={this.fullNameHandler}>
          Fullname
        </button> */}
        <StyledButton
          alt={this.state.showPersons}
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

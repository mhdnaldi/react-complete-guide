import React, { Component } from "react";
import Person from "./Person/Person";
import "./App.css";

class App extends Component {
  state = {
    persons: [
      { name: "Naruto", age: 23 },
      { name: "Sasuke", age: 24 },
      { name: "Sakura", age: 24 },
    ],
    showPersons: false,
  };

  btnStyle = {
    backgroundColor: "white",
    fontSize: "16px",
    padding: "16px",
    margin: "0 10px",
  };

  changeNameHandler = () => {
    this.setState({
      persons: [
        { name: "Naruto Uzumaki", age: 23 },
        { name: "Sasuke Uchiha", age: 24 },
        { name: "Sakura Haruno", age: 24 },
      ],
    });
  };

  inputTextHandler = (event) => {
    this.setState({
      persons: [
        { name: event.target.value, age: 23 },
        { name: "Sasuke", age: 24 },
        { name: "Sakura", age: 24 },
      ],
    });
  };

  togglePersonsHandler = () => {
    const isSHow = this.state.showPersons;
    this.setState({ showPersons: !isSHow });
  };
  render() {
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
            change={this.inputTextHandler}
          />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
          />
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
          />
        </div>
      );
    }
    return (
      <div className="App">
        <h1>React Course</h1>
        <button style={this.btnStyle} onClick={this.changeNameHandler}>
          Full name
        </button>
        <button style={this.btnStyle} onClick={this.togglePersonsHandler}>
          Show persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;

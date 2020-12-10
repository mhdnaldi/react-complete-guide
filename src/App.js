import React, { Component } from "react";
import Person from "./Person/Person";
import "./App.css";

class App extends Component {
  state = {
    persons: [
      { id: "jajksd1", name: "Naruto", age: 23 },
      { id: "jajksd2", name: "Sasuke", age: 24 },
      { id: "jajksd3", name: "Sakura", age: 24 },
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
        { id: "jajksd1", name: "Naruto Uzumaki", age: 23 },
        { id: "jajksd2", name: "Sasuke Uchiha", age: 24 },
        { id: "jajksd3", name: "Sakura Haruno", age: 24 },
      ],
    });
  };

  inputTextHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id; // true / false
    });

    // new object
    const person = { ...this.state.persons[personIndex] }; // mengambil element yang sesuai dengan index
    person.name = event.target.value;

    // new object
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons,
    });
  };

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
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
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                change={(event) => this.inputTextHandler(event, person.id)}
              />
            );
          })}
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

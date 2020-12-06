import React, { Component } from "react";
import Person from "./Person/Person";
import "./App.css";

class App extends Component {
  state = {
    persons: [
      { name: "Kakashi", age: 40 },
      { name: "Naruto", age: 23 },
      { name: "Sakura", age: 24 },
      { name: "Sasuke", age: 24 },
    ],
  };
  render() {
    return (
      <div className="App">
        <h1>Team 7</h1>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
        <Person
          name={this.state.persons[3].name}
          age={this.state.persons[3].age}
        />
      </div>
    );
  }
}

export default App;

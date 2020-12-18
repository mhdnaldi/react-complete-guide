import React, { PureComponent } from "react";
import "./App.css";
import Person from "../components/Persons/Person/Person";
import Cockpit from "../components/Cockpit/Cockpit";

// PURE COMPONENT IS BETTER THAN REGULAR COMPONENT FOR MEMORY
class App extends PureComponent {
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

  // shouldComponentUpdate(nextProps, nextState) {
  // return true or false
  // } // IMPORTANT FOR MEMORY EFFICIENCY, IT ONLY RENDER THE PROPS IN CERTAIN CONDITION

  render() {
    let persons = null;

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
        <Cockpit
          showPersons={this.state.showPersons}
          show={this.showPersonsHandler}
          persons={this.state.persons}
        />
        {persons}
      </div>
    );
  }
}

export default App;

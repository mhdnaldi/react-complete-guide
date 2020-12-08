import React, { Component } from "react";
import Person from "./Person/Person";
import "./App.css";

class App extends Component {
  state = {
    persons: [
      { name: "Naruto", age: 20 },
      { name: "Sasuke", age: 21 },
      { name: "Sakura", age: 21 },
    ],
  };
  switchNameHandler = (name) => {
    this.setState({
      persons: [
        { name: name, age: 20 },
        { name: "Uchiha Sasuke", age: 21 },
        { name: "Haruno Sakura", age: 21 },
      ],
    });
  };
  changeNameHandler = (event) => {
    this.setState({
      persons: [
        { name: "Uzumaki Naruto", age: 20 },
        { name: event.target.value, age: 21 }, // EVENT TARGET VALUE UTK MENGAMBIL ISI TEXT YANG DIINPUT
        { name: "Haruno Sakura", age: 21 },
      ],
    });
  };
  render() {
    const btnStyle = {
      backgroundColor: "white",
      padding: "16px",
      font: "inherit",
      borderColor: "1px solid #eee",
      cursor: "pointer",
    };
    return (
      <div className="App">
        <h1>Team Kakashi</h1>
        <button
          style={btnStyle}
          onClick={() => this.switchNameHandler("Uzumaki naruto")}
        >
          Fullname
        </button>
        <Person
          click={() => this.switchNameHandler("Dattebayo!")}
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          change={this.changeNameHandler}
        />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}
export default App;

// REACT HOOKS
// import React, { useState } from "react";
// const App = (props) => {
//   const [personsState, setPersonsState] = useState({
//     persons: [
//       { name: "Kakashi", age: 40 },
//       { name: "Naruto", age: 23 },
//       { name: "Sakura", age: 24 },
//       { name: "Sasuke", age: 24 },
//     ],
//   });

//   const switchNameHandler = () => {
//     setPersonsState({
//       persons: [
//         { name: "Kakashi Sensei", age: 40 },
//         { name: "Naruto Uzumaki", age: 23 },
//         { name: "Sakura Haruno", age: 24 },
//         { name: "Sasuke Uchiha", age: 24 },
//       ],
//     });
//   };
//   return (
//     <div className="App">
//       <h1>Team 7</h1>
//       <button onClick={switchNameHandler}>Switch button</button>
//       <Person
//         name={personsState.persons[0].name}
//         age={personsState.persons[0].age}
//       />
//       <Person
//         name={personsState.persons[1].name}
//         age={personsState.persons[1].age}
//       />
//       <Person
//         name={personsState.persons[2].name}
//         age={personsState.persons[2].age}
//       />
//       <Person
//         name={personsState.persons[3].name}
//         age={personsState.persons[3].age}
//       />
//     </div>
//   );
// };

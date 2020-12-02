// import logo from './logo.svg';
// import { render } from '@testing-library/react';
import React, { Component } from 'react'
import Person from './Person/Person'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>First day using React!</h1>
        <p>React is awesome</p>
        <Person />
      </div>
    )
  }
}



// function App() {
//   return (
//     <div className="App">
//       <h1>Hi React!</h1>
//     </div>
//   );
// }

export default App;

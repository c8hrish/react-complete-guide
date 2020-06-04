import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>I'm an Albatraoz..!</h1>
        <p>Vu-Vu..VU-VU-VU</p>
        <Person/>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>I'm an Albatraoz..!</h1>
        <p>Vu-Vu..VU-VU-VU</p>
        <Person name='Ganu' exp='4'/>
        <Person name='Bob' exp='2'>My hobby is to sing loudly and badly</Person>
        <Person name='Subbu' exp='3'/>
      </div>
    );
  }
}

export default App;

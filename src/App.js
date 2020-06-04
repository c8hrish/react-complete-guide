import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    deejays: [
      { name:'Ganu', exp:'4'},
      { name:'Bob', exp:'2'},
      { name:'Subbu', exp:'3'}
    ]
  }

  switchNameHandler=() =>{
    this.setState( {
      deejays: [
        { name:'Ganesha', exp:'4'},
        { name:'Bobby', exp:'2'},
        { name:'Subramaniam', exp:'8'}
      ]
    } 
    )
  }



  render() {
    return (
      <div className="App">
        <h1>I'm an Albatraoz..!</h1>
        <p>Vu-Vu..VU-VU-VU</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.deejays[0].name} exp={this.state.deejays[0].exp}/>
        <Person name={this.state.deejays[1].name} exp={this.state.deejays[1].exp}>My hobby is to sing loudly and badly</Person>
        <Person name={this.state.deejays[2].name} exp={this.state.deejays[2].exp}/>
      </div>
    );
  }
}

export default App;

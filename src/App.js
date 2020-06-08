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

  switchNameHandler=(newName) =>{
    this.setState( {
      deejays: [
        { name:newName, exp:'4'},
        { name:'Bablu', exp:'2'},
        { name:'Subramaniam', exp:'8'}
      ]
    } 
    )
  }

  namechangedHandler = (event) => {
    this.setState({
      deejays:[
        {name:'Ganesh', exp:4},
        {name:event.target.value, exp:2},
        {name:'Subramaniam', exp:3}
      ]
    })
  }

render() {
  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  }
    return (
      <div className="App">
        <h1>I'm an Albatraoz..!</h1>
        <p>Vu-Vu..VU-VU-VU</p>
        <button style = {style}
          onClick={() => this.switchNameHandler('Ganesha!')}>Switch Name</button>
        <Person 
          name={this.state.deejays[0].name} 
          exp={this.state.deejays[0].exp}/>
        <Person 
          name={this.state.deejays[1].name} 
          exp={this.state.deejays[1].exp}
          click={this.switchNameHandler.bind(this,'Bablya!')}
          changed={this.namechangedHandler}
          >My hobby is to sing loudly and badly</Person>
        <Person 
          name={this.state.deejays[2].name} 
          exp={this.state.deejays[2].exp}/>
      </div>
    );
  }
}

export default App;
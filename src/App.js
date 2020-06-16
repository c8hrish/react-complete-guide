import React, { Component } from 'react';
import './App.css';
import Deejay from './Deejay/Deejay';

class App extends Component {
  state = {
    deejays: [
      { id:'asdf1', name:'Ganu', exp:'4'},
      { id:'asdf2', name:'Bob', exp:'2'},
      { id:'asdf3', name:'Subbu', exp:'3'}
    ],
    otherState: 'Something-Something',
    showDeejays: false
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

  namechangedHandler = (event,id) => {
   const deejayIndex= this.state.deejays.findIndex(p=>{
     return p.id===id;
   })
   const deejay={
     ...this.state.deejays[deejayIndex]
   };
   deejay.name=event.target.value;
   const deejays= [...this.state.deejays];
   deejays[deejayIndex]= deejay;
   this.setState({deejays:deejays})
  }

  deleteDeejayHandler = (deejayIndex) => {
    const deejays = [...this.state.deejays];
    deejays.splice(deejayIndex,1);
    this.setState({deejays: deejays});
  }

  toggleDeejaysHandler = () => {
      const doesShow = this.state.showDeejays;
      this.setState({showDeejays: !doesShow});

  }

render() {
  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '2px solid blue',
    padding: '8px',
    cursor: 'pointer'
  }
  
  let deejays = null

  if (this.state.showDeejays){
    deejays = (
        <div>
          {
            this.state.deejays.map((deejay,index)=>{
              return <Deejay
                  click={()=>this.deleteDeejayHandler(index)}
                  name={deejay.name}
                  exp={deejay.exp}
                  key={deejay.id}
                  changed={(event)=>this.namechangedHandler(event,deejay.id)}/>
            })
          }
        </div>
    );
  }
    return (
      <div className="App">
        <h1>I'm an Albatraoz..!</h1>
        <p>Vu-Vu-Vu..VU-VU-VU</p>
        <button style = {style}
          onClick={this.toggleDeejaysHandler}>Toggle DJ's</button>
        {deejays}
      </div>
    );
  }
}

export default App;
import React, { Component } from 'react';
import Grid from './components/grid.js'
import './pp.css'

class App extends Component {
  state= {
   arrayGrid : [
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
    ],
    Rover : {
      direction: "N",
      x: 0,
      y: 0,
      travellog: []
    }
    
  }

// turn Left
 turnLeft = () =>{
   var directions = this.state.Rover.direction;
   if(directions === "N"){
     directions ="W";
   } else if(directions === "W"){
     directions ="S";
   }  else if(directions === "S"){
     directions ="E";
   }  else if(directions === "E"){
     directions ="N";
   } 
   
   this.setState({
    Rover : {
      direction: directions,
      x: 0,
      y: 0,
      travellog: []
    }
   })
 }
 // turn right 
 turnRight = () =>{
  var directions = this.state.Rover.direction;
  if(directions === "N"){
    directions ="E";
  } else if(directions === "E"){
    directions ="S";
  }  else if(directions === "S"){
    directions ="W";
  }  else if(directions === "W"){
    directions ="N";
  } 
  
  this.setState({
   Rover : {
     direction: directions,
     x: 0,
     y: 0,
     travellog: []
   }
  })
}


  render() {
    return (
      <div className='pp'>
      <button  onClick={this.turnLeft} >turnLeft</button>
      <button  onClick={this.turnRight} >turnRight</button>
        <Grid  boxes={this.state.arrayGrid}    dir={this.state.Rover.direction}/>
      </div>
    );
  }
}

export default App;

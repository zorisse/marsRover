import React, {
  Component
} from 'react';
import Grid from './components/grid.js'
import './pp.css'

class App extends Component {
  state = {
    arrayGrid: [
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
    Rover: {
      direction: "N",
      x: 0,
      y: 0,
      travellog: []
    }

  }

  // turn Left
  turnLeft = () => {
    var directions = this.state.Rover.direction;
    if (directions === "N") {
      directions = "W";
    } else if (directions === "W") {
      directions = "S";
    } else if (directions === "S") {
      directions = "E";
    } else if (directions === "E") {
      directions = "N";
    }

    let roverTemp ={...this.state.Rover};
    roverTemp.direction =directions;
    this.setState({
      Rover: {...roverTemp}
    })
  }
  // turn right 
  turnRight = () => {

    var directions = this.state.Rover.direction;
    if (directions === "N") {
      directions = "E";
    } else if (directions === "E") {
      directions = "S";
    } else if (directions === "S") {
      directions = "W";
    } else if (directions === "W") {
      directions = "N";
    }
    let roverTemp ={...this.state.Rover};
    roverTemp.direction =directions;
    this.setState({
      Rover: {...roverTemp}
    })
  }

  // Move Foward 

  moveFoward = () => {

    const roverTemp = { ...this.state.Rover
    };
    switch (roverTemp.direction) {
      case "N":
        // si y =0 ne ignorer la commande 
        if (roverTemp.y !== 0) {
          roverTemp.y -= 1;
        } else {
          console.log("Vous avez atteint la frontière Nord, vous ne pouvez pas aller plus loin");
        }
        break;
      case "S":
        if (roverTemp.y !== 10) {
          roverTemp.y += 1;
        } else {
          console.log("Vous avez atteint la frontière Sud, vous ne pouvez pas aller plus loin");
        }
        break;
      case "E":
        if (roverTemp.x !== 10) {
          roverTemp.x += 1;
        } else {
          console.log("Vous avez atteint la frontière Est, vous ne pouvez pas aller plus loin");
        }

        break;
      case "W":
        if (roverTemp.x !== 0) {
          roverTemp.x -= 1;
        } else {
          console.log("Vous avez atteint la frontière West, vous ne pouvez pas aller plus loin");
        }
        break;
        default:console.log("OOPS je n'ai pas prévu ce scénario");
    }
    this.setState({
      Rover: { ...roverTemp
      }
    })
  }


  render() {
    return (
      <div className='pp'>
              <p>
          Rover : 
          - X :{this.state.Rover.x}    
          - y :{this.state.Rover.y} ======>    
          direction : {this.state.Rover.direction}
        </p>

      <button  onClick={this.turnLeft} >turnLeft</button>
      <button  onClick={this.turnRight} >turnRight</button>
      <button  onClick={this.moveFoward} >Move Forward</button>

        <Grid  boxes={this.state.arrayGrid}  
                
        />


      </div>
    );
  }
}

export default App;

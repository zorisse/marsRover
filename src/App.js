import React, {Component} from 'react';
import Grid from './components/grid.js'
import './pp.css'
import Buttons from './components/button.js'
import Message from './components/message.js'

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
    },
    messageAlert: null,

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
    const arrayGridTemp = this.state.arrayGrid;
    var messageAlertTemp = this.state.messageAlert; 
    switch (roverTemp.direction) {
      case "N":
        // si y =0 ne ignorer la commande 
        if (roverTemp.y !== 0) {
          roverTemp.y -= 1;
        } else {
          messageAlertTemp = "Vous avez atteint la frontière Nord, vous ne pouvez pas aller plus loin";
        }
        break;
      case "S":
        if (roverTemp.y !== 10) {
          roverTemp.y += 1;
        } else {
          messageAlertTemp ="Vous avez atteint la frontière Sud, vous ne pouvez pas aller plus loin";
        }
        break;
      case "E":
        if (roverTemp.x !== 10) {
          roverTemp.x += 1;
        } else {
          messageAlertTemp ="Vous avez atteint la frontière Est, vous ne pouvez pas aller plus loin";
        }

        break;
      case "W":
        if (roverTemp.x !== 0) {
          roverTemp.x -= 1;
        } else {
          messageAlertTemp ="Vous avez atteint la frontière West, vous ne pouvez pas aller plus loin";
        }
        break;
        default:console.log("OOPS je n'ai pas prévu ce scénario");
    }

    arrayGridTemp[roverTemp.y][roverTemp.x]= "ROVER"
    this.setState({
      Rover: { ...roverTemp
      }, 
      arrayGrid: arrayGridTemp,
      messageAlert: messageAlertTemp, 
    })
  }




  render() {
    return (
      <div className='pp' style={{display: 'flex' , flexDirection: 'column', border:'1px solid red', justifyContent:'center', margin:'5%', padding:'2%'}}>

         <div style={{textAlign:'center'}}>
         <p >
          Rover : 
          - X :{this.state.Rover.x}
          - y :{this.state.Rover.y}

        </p>
        <p> Direction : {this.state.Rover.direction}</p>
        <div>
            <Message message ={this.state.messageAlert}/>
        </div>
        

         </div>
        

        <div>
          <Buttons turnleft={this.turnLeft} turnRight={this.turnRight} moveFoward={this.moveFoward} />
        </div>
        <div>
        <Grid  boxes={this.state.arrayGrid}    dir={this.state.Rover.direction}/>
        </div>
        
                
        


      </div>
    );
  }
}

export default App;

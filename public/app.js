console.log("connected");
// Rover Object Goes Here
// ======================
var grid = [
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
]




var Rover = {
  direction: "N",
  x: 0,
  y: 0,
  travellog: []
}





// ======================
function turnLeft(rover) {
  console.log("turnLeft was called!");
  var actualDirection = rover.direction;
  if (actualDirection == "N") {
    rover.direction = "W";
  } else if (actualDirection == "W") {
    rover.direction = "S";
  } else if (actualDirection == "S") {
    rover.direction = "E";
  } else if (actualDirection == "E") {
    rover.direction = "N";
  }
  console.log(rover.direction);
}

function turnRight(rover) {
  console.log("turnRight was called!");
  var actualDirection = rover.direction;
  if (actualDirection == "N") {
    rover.direction = "E";
  } else if (actualDirection == "e") {
    rover.direction = "S";
  } else if (actualDirection == "S") {
    rover.direction = "W";
  } else if (actualDirection == "W") {
    rover.direction = "N";
  }
  console.log(rover.direction);
}

function moveForward(rover) {
  var actualDirection = rover.direction;
  
  // ajout de la sécurité au frontière 
  switch (actualDirection) {
    case "N":
    // si y =0 ne ignorer la commande 
    if (rover.y != 0) {
      rover.y -= 1; 
    }else{
      console.log("Vous avez atteint la frontière Nord, vous ne pouvez pas aller plus loin");
    }
      break;
    case "S":
    if (rover.y != 10) {
      rover.y += 1;
    } else {
      console.log("Vous avez atteint la frontière Sud, vous ne pouvez pas aller plus loin");
    }
      break;
    case "E":
    if (rover.x != 10) {
      rover.x += 1;
    } else {
      console.log("Vous avez atteint la frontière Est, vous ne pouvez pas aller plus loin"); 
    }
      
      break;
    case "W":
    if (rover.x != 0) {
      rover.x -= 1;
    } else {
      console.log("Vous avez atteint la frontière West, vous ne pouvez pas aller plus loin"); 
    }
      break;
  }
}


function moovesString(roverOrders) {

  // effacer la grille 
  var gridtemp = grid; 
  gridtemp[Rover.y][Rover.x]= null;
  // Mettre tous les ordres dans une array et n'extraire que les 'r' 'l' 'f'
    let ordersListTemp = []; 
    for (let index = 0; index < roverOrders.length; index++) {
      if (roverOrders[index] ==='f' || roverOrders[index] ==='r' || roverOrders[index]=== 'l' ) {
        ordersListTemp.push( roverOrders[index]) 
        }  
    }
    console.log(ordersListTemp);
    // Ajouter les ordres au journal de log 
    Rover.travellog = [...Rover.travellog, ...ordersListTemp];
   // appliquer les ordres 
    ordersListTemp.map(
      (e) => {
        if (e === 'f') {
          moveForward(Rover);          
        } else if (e ==='r') {
          turnRight(Rover);
        } else if (e ==='l') {
          turnLeft(Rover); 
        }
      }
    );

    // insérer le ROVER dans la grille 
    gridtemp[Rover.y][Rover.x]= Rover;
    console.log(gridtemp); 
    grid = gridtemp;

    console.log(`La nouvelle positision est ligne :  ${Rover.y} , col : ${Rover.x}
                 Le Rover pointe vers => ${Rover.direction}` );
    console.log(Rover.travellog);
}
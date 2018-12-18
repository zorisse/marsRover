import React from 'react';


const Buttons = (props) =>{
    return(
        <div style={{display:'flex', flexDirection:'row', justifyContent:'center', margin:'20px 0px'  }}>
    <button  onClick={props.turnLeft} >turnLeft</button>
    <button  onClick={props.turnRight} >turnRight</button>
    <button  onClick={props.moveFoward} >Move Forward</button>
        </div>
    )
}

export default Buttons; 
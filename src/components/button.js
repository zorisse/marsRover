import React from 'react';

const styleButton ={
    fontFamily:'Orbitron',
    margin: '8px',
    padding: '8px',
    color:'#12e80b',
    background:'#7c090d',
    fontWeight:'bold'
}


const Buttons = (props) =>{
    return(
     <div style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
    <button style={styleButton} onClick={props.turnLeft} >turnLeft</button>
    <button style={styleButton} onClick={props.turnRight} >turnRight</button>
    <button style={styleButton} onClick={props.moveFoward} >Move Forward</button>
        </div>
    )
}

export default Buttons; 
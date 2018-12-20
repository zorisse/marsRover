import React from 'react'

const Message = (props) => {
    let mess = props.message; 
    let style =null;
    if (mess!== null) {
        style = {fontSize:'medium', background:'#7c090d', fontWeight:'bold', padding:'3px'}
    } else {
        style= null;
    }
  
     
            return(
                
                <div style={style}>{
                    mess
                 }</div>
            )



}

export default Message; 
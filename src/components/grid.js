import React from 'react';
import './grid.css';

const Grid = (props) => {
const row = props.boxes;

return(
    row.map((e,indexRow)=> {
    return   ( 
        <div className='row'>

            {e.map((ee, index)=>{return(

                <div className='boxes'id={index}>
                    y: {indexRow} x: {index}
                    {props.dir}
                </div>
                
                )}
            )} 
        </div>
        )
    })

)
}

export default Grid;
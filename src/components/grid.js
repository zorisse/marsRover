import React from 'react';
import './grid.css';

const Grid = (props) => {
const grid = props.boxes;

return(
    grid.map((row,indexRow)=> {
    return   ( 
        <div className='row'>

            {row.map((ee, index)=>{
                if (ee== null) {
                    return(
                        <div className='boxes'id={index}>
                            y: {indexRow} x: {index}
                            {props.dir}
                        </div>
                        
                        )
                } else {
                    return(
                        <div className='boxes'id={index}>
                           lapinou
                        </div>
                        
                        )
                }
                }
            )}

        </div>
        )
    })

)
}

export default Grid;
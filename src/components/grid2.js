import React from 'react';
import './grid.css';

const Grid = (props) => {
const grid = props.boxes;
let rov =null; 
let style = null;
return(
    grid.map((row,indexRow)=> {
    return   ( 
        <div className='row'>

            {row.map((ee, index)=>{
                if (ee== null) {
                    rov = ` y: ${indexRow} x: ${index} `;
                    style=null;
                } else if (ee ==='ROVER') {
                    rov = 'ROVER';
                    style = {
                        backgroundColor: 'green',
                        color:'red'
                    };
                }
                return(
                    <div className='boxes'id={index} style={style} >
                             {rov}
                    </div>
                )
                }
            )}

        </div>
        )
    })

)
}

export default Grid;
import React, { Component } from 'react';
import Grid from './components/grid.js'
import './pp.css'

class App extends Component {
  state={
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
    ]
    
  }
  render() {
    
    return (
      <div className='pp'>
        <Grid  boxes={this.state.arrayGrid}    />
      </div>
    );
  }
}

export default App;

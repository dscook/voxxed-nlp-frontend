import React, { Component } from 'react';
import { Sigma, LoadJSON, RandomizeNodePositions, RelativeSize } from 'react-sigma';
import ForceLink from 'react-sigma/lib/ForceLink';
import './App.css';
import DragNodes from './graph/DragNodes';
import ColourByEntityType from './graph/ColourByEntityType';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Voxxed Bristol 2018</h1>
        </header>
        <main className="App-body">
          <Sigma style={{flex: "1 0 auto", display: "flex"}} settings={{
            drawEdges: true, 
            clone: false,
            minNodeSize: 4,
            maxNodeSize: 16,
            labelThreshold: 1}}>
            <LoadJSON path="/model.json">
              <RandomizeNodePositions />
              <RelativeSize initialSize={10000} />
              <ForceLink background easing="cubicInOut" strongGravityMode={true} />
              <DragNodes />
              <ColourByEntityType />
            </LoadJSON>
          </Sigma>
        </main>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { Sigma, LoadJSON, RandomizeNodePositions, RelativeSize } from 'react-sigma';
import ForceLink from 'react-sigma/lib/ForceLink';
import './App.css';
import DragNodes from './graph/DragNodes';
import FormatGraph from './graph/FormatGraph';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Voxxed Bristol 2018</h1>
        </header>
        <main className="App-body">
          <Sigma 
            style={{flex: "1 0 auto", display: "flex"}}
            renderer="canvas"
            onClickEdge={e => console.log(e)}
            settings={{
              clone: false,
              minNodeSize: 4,
              maxNodeSize: 16,
              labelThreshold: 1,
              enableEdgeHovering: true,
              edgeColor: "default",
              defaultEdgeColor: "grey"}}>
            <LoadJSON path="/model.json">
              <RandomizeNodePositions />
              <RelativeSize initialSize={10000} />
              <ForceLink background easing="cubicInOut" strongGravityMode={true} />
              <DragNodes />
              <FormatGraph />
            </LoadJSON>
          </Sigma>
        </main>
      </div>
    );
  }
}

export default App;

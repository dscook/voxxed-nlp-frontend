import React, { Component } from 'react';
import { Sigma, LoadJSON, RandomizeNodePositions, RelativeSize } from 'react-sigma';
import ForceLink from 'react-sigma/lib/ForceLink';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
import './App.css';
import DragNodes from './graph/DragNodes';
import FormatGraph from './graph/FormatGraph';

class App extends Component {

  state = {
    open: false,
    sentence: ''
  };

  handleOpen = (event) => {
    this.setState({ open: true, sentence: event.data.edge.sentence });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

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
            onClickEdge={this.handleOpen}
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
          <Modal
            aria-describedby="simple-modal-description"
            open={this.state.open}
            onClose={this.handleClose}>
            <div className="App-modal">
              <Typography variant="subheading" id="simple-modal-description">
                {this.state.sentence}
              </Typography>
            </div>
          </Modal>
        </main>
      </div>
    );
  }
}

export default App;

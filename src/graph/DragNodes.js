/* global sigma */
import { Component } from 'react';
import 'react-sigma/sigma/sigma.plugins.dragNodes';

class DragNodes extends Component {
	constructor(props) {
        super(props);
        sigma.plugins.dragNodes(this.props.sigma, this.props.sigma.renderers[0]);
	}

    render() {
        return null;
    }
}

export default DragNodes;
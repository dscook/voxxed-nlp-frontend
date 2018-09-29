import { Component } from 'react';

class ColourByEntityType extends Component {

	constructor(props) {
		super(props);
        const { sigma } = props;
        this.colourNodes(sigma.graph.nodes());
        sigma.cameras[0].goTo({ x: 0, y: 0, angle: 0, ratio: 1.2 });
        sigma.refresh();
    }
    
    colourNodes(nodes) {
        nodes.forEach(node => {
            if (node.entityType === 'PERSON') {
                node.color = 'blue';
            } else if (node.entityType === 'LOCATION' || node.entityType === 'CITY') {
                node.color = 'green';
            } else if (node.entityType === 'TITLE') {
                node.color = 'orange';
            } else if (node.entityType === 'CAUSE_OF_DEATH') {
                node.color = 'red';
            }
        });
    }

    render() {
        return null;
    }
}

export default ColourByEntityType;
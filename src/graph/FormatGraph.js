import { Component } from 'react';

class FormatGraph extends Component {

    constructor(props) {
        super(props);
        const { sigma } = props;
        this.colourNodes(sigma.graph.nodes());
        sigma.graph.edges().forEach(e => {
            // We must set an edge size so the on edge click event works
            e.size = 1;
        });
        sigma.cameras[0].goTo({ x: 0, y: 0, angle: 0, ratio: 1.2 });
        sigma.refresh();
    }
    
    colourNodes(nodes) {
        nodes.forEach(node => {
            if (node.entityType === 'PERSON') {
                node.color = 'black';
            } else if (node.entityType === 'LOCATION' || node.entityType === 'CITY') {
                node.color = '#138D75';
            } else if (node.entityType === 'TITLE') {
                node.color = '#2471A3';
            } else if (node.entityType === 'CAUSE_OF_DEATH') {
                node.color = '#B03A2E';
            }
        });
    }

    render() {
        return null;
    }
}

export default FormatGraph;
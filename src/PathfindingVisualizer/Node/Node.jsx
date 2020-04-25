import React, {Component} from 'react';
import './Node.css';

/**
 * A Node component represents a single square in the grid.
 */
export default class Node extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return <div className="node"></div>;
    }
}
import React, { Component } from 'react';
import withCounter from './withCounter';

class ClickCounter extends Component {

    render() {
        const { count, incrementCounter } = this.props
        return <button onClick={ incrementCounter }>
        {this.props.name} Click { count } times</button>
    }
}

export default withCounter(ClickCounter, 5); 
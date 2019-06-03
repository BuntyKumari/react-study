import React, { Component } from 'react';
import LifeCycleB from './LifeCycleB';

class LifeCycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Bunty'
      }
      console.log('Lifecycle A  Constructor')
    }
    static getDerivedStateFromProps(props, state){ //has to return new state or null
        console.log('Lifecycle A getDerivedStateFromProps')
        return null
    }
    
    componentDidMount() {
        console.log('Lifecycle A componentDidMount')
    }

    shouldComponentUpdate(){
        console.log('LifeCycle A shouldComponentUpdate')
        return true
    }
    getSnapshotBeforeUpdate(){
        console.log('LifeCycle A getSnapshotBeforeUpdate')
        return null
    }
    componentDidUpdate(){
        console.log('LifeCycle A componentDidUpdate')
    }
    changeState = () => {
        this.setState({
            name: 'Codevolution'
        })
    }
    render() {
        console.log('LifeCycle A render')
        return (
            <div>
                <div>Lifecycle A</div>
                <button onClick={this.changeState}>Change State</button>
                <LifeCycleB />
            </div>
        );
    }
}

export default LifeCycleA;
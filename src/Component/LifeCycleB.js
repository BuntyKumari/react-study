import React, { Component } from 'react';

class LifeCycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Bunty'
      }
      console.log('Lifecycle B  Constructor')
    }
    static getDerivedStateFromProps(props, state){ //has to return new state or null
        console.log('Lifecycle B getDerivedStateFromProps')
        return null
    }
    
    componentDidMount() {
        console.log('Lifecycle B componentDidMount')
    }
    shouldComponentUpdate(){
        console.log('LifeCycle B shouldComponentUpdate')
        return true
    }
    getSnapshotBeforeUpdate(){
        console.log('LifeCycle B getSnapshotBeforeUpdate')
        return null
    }
    componentDidUpdate(){
        console.log('LifeCycle B componentDidUpdate')
    }

    render() {
        console.log('LifeCycle B render')
        return <div>Lifecycle B</div>
    }
}

export default LifeCycleB;
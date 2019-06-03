import React, { Component } from 'react';

class ClassClick extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: "Hello"
      }
      this.clckHandler = this.clckHandler.bind(this);
    }
    
    clckHandler(){
       this.setState({
           message:"Welcome"
       })
       console.log(this)

    }
    // clickHandler = () => {
    //     this.setState({
    //        message: "Welcome"
    //      })
    // }
    render() {
        return (
            <div>
                <div> {this.state.message}</div>
               
                {/* There is a four way to define  a click handler */}
                {/* <button onClick={this.clckHandler.bind(this)}>Click Me</button> */}
                {/* <button onClick={() => this.clckHandler()}>Click Me</button> */}
                <button onClick={this.clckHandler}>Click Me</button>
                {/* <button onClick={this.clckHandler}>Click Me</button> */}
            </div>
        );
    }
}

export default ClassClick;
import React, { Component } from 'react';

class Greet extends Component {
    constructor() {
      super()
    
      this.state = {
         message:"Welcome Visitor"
      }
    }
    changeMessage(){
        this.setState({
            message:"Thank You for subscribing"
        })
    }
    
    render() {
        return (
            <div>
                <h1>
                {this.state.message}
                </h1>
                
               <div> <button onClick={()=> this.changeMessage()}>Subscribe</button></div>
            </div>
        );
    }
}

export default Greet;
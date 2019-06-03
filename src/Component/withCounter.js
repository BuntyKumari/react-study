import React from 'react'

const withCounter = (WrappedComponent, incrementNumber) => {
    class withComponent extends React.Component {
        constructor(props) {
            super(props)
          
            this.state = {
               count: 0
            }
          }
          
          incrementCounter = () => {
              this.setState (prevState => {
                  return { count: prevState.count + incrementNumber }
              })
          }
        render() {
            console.log(this.props.name)
            return <WrappedComponent 
            count = { this.state.count }
            incrementCounter = { this.incrementCounter }
            { ... this.props }
            />
        }
    }
    return withComponent
}
export default withCounter
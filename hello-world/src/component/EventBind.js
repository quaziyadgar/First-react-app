import React, { Component } from 'react'

export class EventBind extends Component {

    constructor() {
        super();
        this.state = {
            message: 'hello'
        }
    }

    clickHandler() {
        this.setState({message : 'bye'})
        console.log(this);
    }

  render() {
    return (
      <div>
          <h1>{this.state.message}</h1>
          {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
          <button onClick={()=>this.clickHandler()}>Click</button>
      </div>
    )
  }
}

export default EventBind
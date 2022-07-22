import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
          message:'Hello EventBind'
      }
     // this.clickHandler = this.clickHandler.bind(this)
    }

    // clickHandler(){
    //     this.setState({
    //         message: 'Clicked to the button of event bind'
    //     })
    // }
    clickHandler=()=>{
        this.setState({
            message: 'Goodbye'
        })
    }
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
       {/* <button onClick={this.clickHandler.bind(this)}>Click EventBind</button>
        <button onClick={() => this.clickHandler()}>Click EventBind</button>*/}
        <button onClick={this.clickHandler}>Click EventBind</button>

      </div>
    )
  }
}

export default EventBind
import React, { Component } from 'react'
// Always make use of setState and never modify the state directly.
// Code has to be executed after the state has been updated?Place that code in the call back
// function which is the second argument to the setState method.
// When you have to update state based on the previous state value,pass inafunction as an
// argument instead of the regular object.
class Counter extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count :0
      }
    }
    increment(){
//In this way if we call this fun 5 times with incrementFive(),
// it only increment once!

        // this.setState({
        //     count: this.state.count + 1
        // },()=>{
        //     console.log('Callback value',this.state.count)
        // })
        //         console.log(this.state.count)
        //     }

// update according to previous state not the object itself,
// In tis way we can call the same fun more than once
            this.setState(prevState =>({
              count:prevState.count +1
            }))
                              
                               
            console.log(this.state.count)
            }
    decrement(){
        this.setState({
            count: this.state.count-1
        },()=>{
            console.log('Callback value',this.state.count)
        })
        console.log(this.state.count)
    }
    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        
    }
  render() {
    return (
      <div>
        <div>Count : {this.state.count}</div>
        <button onClick = {()=> this.incrementFive()}>IncrementFive</button>
        <button onClick = {()=> this.decrement()}>Decrement</button>
      </div>
    )
  }
}

export default Counter
import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false
        }
    }
//different coditional rendering types !!!!!
    // render() {
    //     if (this.state.isLoggedIn) {
    //         return <div>Welcome Mr. Halil</div>
    //     } else {
    //         return <div>Welcome Guest</div>
    //     }
    // }
    // render(){
    //     let message
    //     if(this.state.isLoggedIn){
    //       return<div>Welcome Mr. Halil</div>
    //     }else{
    //       return<div>Welcome Guest</div>
    //     }
    //     return <div>{message}</div>
    // }
    render(){
        return this.state.isLoggedIn ? 
       <div>Welcome Mr. Halil</div> :
       <div>Welcome Guest</div>
    }
    // render(){
    //     return this.state.isLoggedIn && <div>Welcome Mr. Hho%%</div>
    // }
}
export default UserGreeting
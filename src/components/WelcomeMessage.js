import React,{Component} from "react";

class WelcomeMessage extends Component{
    constructor(){
        super()
        this.state={
            message: ' WelcomeMessage Visitor, Please subscribe :))))))'
        }
    }

    changeMessage(){
        this.setState({
            message:'Thank you for Subscribing'
        })
    }
    render(){
        return (
            <div>
                 <h1>  {this.state.message} </h1>
                 <button onClick={()=> this.changeMessage()}>Subscribe</button>
            </div>             
        )
        
    }
}
export default WelcomeMessage;
import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            parentName: 'Parent'
        }
        this.greetParent = this.greetParent.bind(this)
    }

    greetParent(childParameter) {
        alert(`Hello ${this.state.parentName} and Welcome to Setur! with parameter: ${childParameter}`)//back ticks and dollar sign are features of ES6
        //alert('Hello '+ this.state.parentName+' and Welcome to Setur!')
    }

    render() {
        return (
            <div>
                <ChildComponent greetHandler={this.greetParent} />
            </div>
        )
    }
}

export default ParentComponent
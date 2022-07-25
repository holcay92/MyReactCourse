import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'


class LifeCycleA extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: 'Halil'
        }
        console.log('lifeCycleA consturctor')
    }


    static getDerivedStateFromProps(props, state) {
        console.log('LifeCycleA getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('LifeCycleA componentDidMount')
    }


    render() {

        console.log('LifeCycleA render')
        return (
            <div>
                <div>
                    LifeCycleA</div>

                <div>
                    <LifeCycleB />
                </div>
            </div>
        )
    }
}

export default LifeCycleA
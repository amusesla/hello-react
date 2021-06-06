import React, { Component } from 'react'

import Child from './Children'

class Parent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            parent: 'Amuse'
        }
        this.greetParent = this.greetParent.bind(this)
    }

    greetParent(child){
        console.log(child)
        alert(`greet! ${this.state.parent} from ${child}`)
    }

    render() {
        return (
            <div>
                <Child greetHandler={this.greetParent}/>
            </div>
        )
    }
}

export default Parent
import React, { Component } from 'react';

class PreviousState extends Component {
    constructor(){
        super()
        this.state = {
            count: 0
        }
    }
    // increaseCount(){
    //     this.setState({
    //         count: this.state.count + 1
    //     },
    //     () => console.log(this.state.count)
    //     )
    // }

    increment(){
        this.setState((prevState)=>({
            count: prevState.count + 1
        }),
        () => console.log('weeeee'))
    }

    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

    render(){
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={() => this.incrementFive()}>+</button>
            </div>
        )
    }
}

export default PreviousState
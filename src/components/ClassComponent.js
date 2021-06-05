import React, { Component } from 'react';

class ClassComponent extends Component {
    constructor(){
        super();

        this.state = {
            message: 'Class Component'
        };
    };

    changeMessage(){
        this.setState({
            message: 'Thank You'
        });
    };

    render(){
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>subscribe</button>
            </div>
        );
    };

}

export default ClassComponent
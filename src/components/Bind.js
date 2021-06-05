import React, { Component } from 'react';

class Bind extends Component {
    constructor(){
        super();

        this.state = {
            message: 'hello'
        };
//3.    this.clickHandler = this.clickHandler.bind(this);
    };
//1, render(){} 안에서 bind(this) 해주기 | 권장 X
    // clickEventHandler(){
    //     this.setState({
    //         message: 'goodbye'
    //     });
    // };

//2. arrow function 을 사용해 bind 해주기 | 권장 X 
    // clickHandler(){
    //     this.setState({
    //         message: 'goodbye'
    //     });
    // };

//3. 생성자에서 this 와 바인드 해주기 <- 리액트에서 권장하는방법 | 권장
    // clickHandler(){
    //     this.setState({
    //         message: 'goodbye'
    //     });
    // };

//4. arrow function 을 이곳에 선언해주기 | 권장
    clickHandler = () => {
        this.setState({
            message: 'goodbye'
        })
    }

    render() {
        return (
            <div>
              <h1>{this.state.message}</h1>
              {/* 1. <button onClick={this.clickEventHandler.bind(this)}>click</button> */}
              {/* 2. <button onClick={() => this.clickHandler()}>Click</button> */}
              {/* 3. <button onClick={this.clickHandler}>click</button> */}
              <button onClick={this.clickHandler}>click</button>

            </div>
        )
    };
}

export default Bind;
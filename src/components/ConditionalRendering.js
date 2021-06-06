import React, { Component } from 'react'

class ConditionalRender extends Component {
    constructor(){
        super()

        this.state = {
            loginStatus: false
        }
    }
    render() {
        let welcomeMessage

        if (this.state.loginStatus) {
            welcomeMessage = <h1> Welcome User </h1>
        } else {
            welcomeMessage = <h1> welcome guest </h1>
        }
        return (
            welcomeMessage
        )
    }
}

export default ConditionalRender
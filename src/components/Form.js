import React, { Component } from 'react'

class Form extends Component {

    constructor() {
        super()

        this.state = {
            id: '',
            username: '',
            email: ''
        }
    }
    
    handleIdChange = (event) => {
        this.setState({
            id: event.target.value
        })
    }

    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handleEmailChange = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    handleSubmit = (event) => {
        console.log(this.state)
        event.preventDefault()
        this.setState({
            id: '',
            username: '',
            email: ''
        })
    }


    render() {
        const {id, username, email} = this.state
        return (
            <form onSubmit={this.handleSubmit}>
              <div>
                <label>id:</label>
                <input type="text" value={id} onChange={this.handleIdChange}/>
              </div>
              <div>
                <label>username:</label>
                <input type="text" value={username} onChange={this.handleUsernameChange}/>
              </div>
              <div>
                <label>email:</label>
                <input type="text" value={email} onChange={this.handleEmailChange}/>
              </div>
              <div>
                <button type="submit">Submit</button>
              </div>
            </form>
        )
    }
}

export default Form
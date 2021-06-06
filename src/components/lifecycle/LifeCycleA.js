import React, { Component } from 'react'

import LifeCycleB from './LifeCycleB'

class LifeCycle extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            username: 'Amuse' 
        }

        this.changeStateA = this.changeStateA.bind(this)
        console.log('Lifecycle A constructor')
    }

    static getDerivedStateFromProps(state, props) {
        console.log('Lifecycle A getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('Lifecycle A componentDidMount')
    }

    shouldComponentUpdate() {
        console.log('Lifecycle A shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate() {
        console.log('Lifecycle A getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate() {
        console.log('Lifecycle A componentDidUpdate')
    }

    changeStateA(){
        this.setState({
            username: 'Super Amuse!'
        })
        console.log('chechec')

    }
    
    render() {
        console.log('Lifecycle A render')
        return (
            <div>
              <div>{this.state.username}</div>
              <button onClick={this.changeStateA}>change state</button>
              <div><LifeCycleB/></div>
            </div>
        )
    }
}

export default LifeCycle

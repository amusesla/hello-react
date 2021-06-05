import React, { Component } from 'react'


// ### CLASS COMPONENT WITH PORPS
// class Welcome extends Component {
//     render() {
//         return <h1>welcom from class components {this.props.name}</h1>
//     }
// }


// ### DESTRUCTURING CLASS PROPS
class DestructureComponent extends Component {
    render() {
        const {name, age} = this.props
        return <h1> welcome from class compoenet {name} {age}</h1>
    }
}

export default DestructureComponent
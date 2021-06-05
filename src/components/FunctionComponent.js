import React from 'react'

// ### FUNCTION COMPONENTS
// function Greet() {
//     return <h1> Hello React !</h1>
// };

// ### PROPS
// const Greet = (props)=> {
//     return (
//         <h1>hey {props.name} {props.age}</h1>
//     )
// }

// ### DESTRUCTURING THE PROPS 1
// const Greet = ({name, age}) => {
//     return (
//     <h1> hello! {name} {age} </h1>
//     )
// }

// ### DESTRUCTURING THE PROPS 2
const FunctionComponent = (props) => {
    const {name, age} = props;
    return (
        <h1>Function Component {name} {age}</h1>
    )
}

export default FunctionComponent;
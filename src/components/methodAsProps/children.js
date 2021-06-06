import React from 'react'

function Child(props) {
    return (
        <button onClick={() => props.greetHandler('child')}>click on child</button>
    )
}

export default Child
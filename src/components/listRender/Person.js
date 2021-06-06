import React from 'react'

function Person({person}) {
    return (
        <div>
            <div>username: {person.username}</div>
            <div>age: {person.age}</div>
        </div>
    )

}

export default Person
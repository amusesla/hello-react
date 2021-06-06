import React from 'react'

import Person from './Person'

function NameList() {
    const persons = [
        {
            id: 1,
            username: 'amuse',
            age: '18'
        },{
            id: 2,
            username: 'Ellie',
            age: '19'
        },{
            id: 3,
            username: 'Mingu',
            age: '20'
        }
    ]

    const PersonList = persons.map(person => <Person key={person.id} person={person}/>)
    return (
        <div>
            {PersonList}
        </div>
    )
}

export default NameList
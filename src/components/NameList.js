import React from 'react'
import Person from './Person'

//list rendering with map function
function NameList() {
    const persons = [
        {
            id: 1,
            name: 'Halil',
            age: 30,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Setur',
            age: 40,
            skill: 'Tour'
        },
        {
            id: 3,
            name: 'Koc',
            age: 60,
            skill: 'Bussiness'
        }
    ]
    const personList = persons.map(person =>(<Person person = {person}></Person>) )
    return (
        <div>
            {
                personList
            }
        </div>
    )
}

export default NameList
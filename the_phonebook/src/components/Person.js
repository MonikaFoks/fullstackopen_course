const Person = ({person, deletePerson}) => {
    console.log(person.name, person.number)
    return(
        <div>
            <li>
                {person.name} {person.number} &nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={() => deletePerson(person)}>delete</button>
            </li>
        </div>
    )
}

export default Person

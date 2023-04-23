import Person from "./Person"

const Persons = (props) => {
    
    return(
      <div>
        <ul>
          {props.personsToShow.map(person => 
            <Person key={person.id} person={person} deletePerson={props.deletePerson}></Person>
          )}
        </ul>
      </div>
    )
}

export default Persons
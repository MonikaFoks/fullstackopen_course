import { useState } from 'react'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import Persons from './components/Persons'


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [nameFilter, setNameFilter] = useState('')


  const nameAlreadyExists = (name, list) => {
    for (var i = 0; i < list.length; i++) {
        if (JSON.stringify(list[i].name) === JSON.stringify(name)) {
            return true;
        }
    }
    return false;
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }
  
  const handleNameFilter = (event) => {
    console.log(event.target.value)
    setNameFilter(event.target.value)
    console.log(nameFilter)
    console.log(JSON.stringify(nameFilter).length !== 0)
  }

  const addName = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
    console.log("NEW NAME: ", newName)
    console.log("NEW NUMBER: ", newNumber)
    const personObject = {
      name: newName,
      number: newNumber,
      important: Math.random() < 0.5,
      id: persons.length+1,
    }

    // console.log("Name not JSONd: ", personObject.name)
    // console.log("Name JSONd: ", JSON.stringify(personObject.name))
    // console.log(nameAlreadyExists(personObject.name, persons))

    if(!nameAlreadyExists(personObject.name, persons)){
      //console.log(personObject.name)
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    }
    else{
      window.alert(`${newName} is already added to phonebook`)
    }
  }

  const personsToShow = (nameFilter.length !== 0) ? persons.filter(person => person.name.startsWith(nameFilter)) : persons

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter nameFilter={nameFilter} handleNameFilter={handleNameFilter}></Filter>
      <h2>Add new</h2>
      <PersonForm
        onSubmit={addName}
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}>
      </PersonForm>
      <h2>Numbers</h2>
      <Persons personsToShow={personsToShow}></Persons>
    </div>
  )
}

export default App
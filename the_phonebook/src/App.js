import { useState, useEffect } from 'react'
import personsService from './services/persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import Persons from './components/Persons'


const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [nameFilter, setNameFilter] = useState('')

  useEffect(() => {
    personsService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

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

  const deletePerson = (person) => {
    if(window.confirm(`Are you sure to delete ${person.name}?`)){
      personsService
      .deletePerson(person.id)
      .then(
        setPersons(persons.filter(n => n.id != person.id))
      )
      .catch(error => {
        alert(
          `Contact '${person.name}' was already deleted from server`
        )
        setPersons(persons.filter(n => n.id !== person.id))
      })
    }
  }

  const updateNumber = (personToUpdate, updatedPerson) => {
    if(window.confirm(`${personToUpdate.name} is already in the book, do you want to update the number?`)){
      personsService
      .updatePersonsNumber(personToUpdate.id, updatedPerson)
      .then(returnedPerson => {
        setPersons(persons.map(person => person.id != personToUpdate.id ? person : returnedPerson))
        setNewName('')
        setNewNumber('')
      })
      .catch(error => {
        alert(
          `Contact '${personToUpdate.name}' was already deleted from server`
        )
        setPersons(persons.filter(n => n.id !== personToUpdate.id))
      })
    }
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
      personsService
      .create(personObject)
      .then(newPerson => {
        setPersons(persons.concat(newPerson))
        setNewName('')
        setNewNumber('')
      })
    }
    else{
      const personToUpdate = persons.find(n => n.name === personObject.name)
      const updatedPerson = {...personToUpdate, number: personObject.number}
      updateNumber(personToUpdate, updatedPerson)
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
      <Persons personsToShow={personsToShow} deletePerson={deletePerson}></Persons>
    </div>
  )
}

export default App
import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import Countries from './components/Countries'

function App() {
  const [countries, setCountries] = useState([])
  const [countriesFilter, setCountriesFilter] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  //console.log(countries)

  const handleCountriesFilter = (event) => {
    console.log(event.target.value)
    setCountriesFilter(event.target.value)
    console.log(countriesFilter)
    console.log(JSON.stringify(countriesFilter).length !== 0)
  }

  const countriesToShow = (countriesFilter.length !== 0) ? countries.filter(country => country.name.common.startsWith(countriesFilter)) : countries

  return(
    <div>
      <Filter countriesFilter={countriesFilter} handleCountriesFilter={handleCountriesFilter}></Filter>
      <Countries countriesToShow={countriesToShow}></Countries>
    </div>
  )

}

export default App;

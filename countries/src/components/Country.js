import Weather from "./Weather"

const Country = ({country}) => {
    console.log(country)
    return(
        <div>
            <h1>{country.name.common}</h1>
            <p>capital {country.capital}</p>
            <p>area {country.area}</p>
            <h2>Languages:</h2>
            {/* <ul>
                {country.languages.map(language => <li key={language.name}>{language.name}</li>)}
            </ul> */}
            {/* I get this error that country.languages.map is not a function. Why?*/}
            <img src={country.flags.png} alt="Country flag"></img>
            <Weather city={country.capital} />
        </div>
    )
}

export default Country
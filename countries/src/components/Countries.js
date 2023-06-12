import Country from "./Country"

const Countries = ({countriesToShow}) => {
    console.log(countriesToShow.length)

    if(countriesToShow.length > 10){
        return(
            <div>
                Too many countries! Make it more specific.
            </div>
        )
    }
    else if(countriesToShow.length > 1){
        return(
            <div>
                <ul>
                    {countriesToShow.map(country => 
                    <li>{country.name.common}</li>
                    )}
                </ul>
            </div>
        )
    }
    return(
        <div>
            {countriesToShow.map(country => 
                <Country key={country.name} country={country}/>
             )}
        </div>
)
}
    

export default Countries

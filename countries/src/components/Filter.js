const Filter= (props) => {

    return(
    <div>
        Search country: <input value={props.countriesFilter} onChange={props.handleCountriesFilter}/>
    </div>
    )
}

export default Filter
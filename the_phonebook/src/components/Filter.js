const Filter= (props) => {

    return(
    <div>
        Filter: <input value={props.nameFilter} onChange={props.handleNameFilter}/>
    </div>
    )
}

export default Filter

const Filter = ({filter, setFilter,setSort}) => {
    return (
        <div className="filter-options">
            <div>
                <p>Status</p>
                <select value={filter} onChange={ (e) => setFilter(e.target.value) }>
                    <option value="All">Todas</option>
                    <option value="Completed">Completa</option>
                    <option value="Incomplete">Incompleta</option>
                </select>
            </div>
            <div>
                <p>Ordem Alfabetica</p>
                <button onClick={ () => setSort("Asc")} >Asc</button>
                <button onClick={ () => setSort("Desc")} >Desc</button>
            </div>
        </div>
    )
}

export default Filter
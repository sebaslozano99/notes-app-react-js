import style from "./searchBar.module.css";


function SearchBar({search, dispatch}){

    return (
        <form className={style.form} >

            <input type="text" placeholder="type to search by title..."  className={style.form__input} value={search} onChange={(e) => dispatch({type: "setSearch", payload: e.target.value})}  />
            
            <button className={style.button} >
                <i className='bx bx-search bx-sm'></i>
            </button>

        </form>
    )
}


export default SearchBar;
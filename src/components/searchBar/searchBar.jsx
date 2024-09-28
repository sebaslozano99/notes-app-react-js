import { useNotes } from "../../context/NotesContext";
import style from "./searchBar.module.css";


function SearchBar(){

    const { search, dispatch } = useNotes();

    return (
        <form className={style.form} >

            <input type="text" placeholder="type to search by title or by date (dd/mm/yyyy)..."  className={style.form__input} value={search} onChange={(e) => dispatch({type: "setSearch", payload: e.target.value})}  />
            
            <button className={style.button} >
                <i className='bx bx-search bx-sm'></i>
            </button>

        </form>
    )
}


export default SearchBar;
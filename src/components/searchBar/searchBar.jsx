import { useState } from "react";
import style from "./searchBar.module.css";


function SearchBar(){

    const [search, setSearch] = useState("");

    return (
        <form className={style.form} >

            <input type="text" placeholder="type to search"  className={style.form__input} value={search} onChange={(e) => setSearch(e.target.value)}  />
            
            <button className={style.button} >
                <i className='bx bx-search bx-sm'></i>
            </button>

        </form>
    )
}


export default SearchBar;
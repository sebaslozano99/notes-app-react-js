import { Link, NavLink } from "react-router-dom";
import style from "./header.module.css";
import { useNotes } from "../../context/NotesContext";



function Header(){

    const { isDark, dispatch } = useNotes();

    return(
        <header className={`${style.header}`} >
            <h1 >
                <Link to="/" className={isDark ? style.logoDark : style.logo} >I Note</Link>
            </h1>

            <nav className={style.nav} >
                <ul>
                    <li>
                        <NavLink className={isDark ? `${style.a} ${style.aDark}` :style.a} to="plans" >Plans</NavLink>
                    </li>
                    
                    <li>
                        <NavLink className={isDark ? `${style.a} ${style.aDark}` :style.a} to="notes" >Notes</NavLink>
                    </li>
                </ul>

                <button onClick={() => dispatch({type: "handleDarkMode"})} className={style.modeBtn} >
                    {
                        isDark ? 
                        <i className={`bx bxs-sun bx-sm ${style.modeIcon}`} ></i>
                        :
                        <i className='bx bxs-moon bx-sm' ></i>
                    }
                </button>

            </nav>

    
        </header>
    )
}


export default Header;
import style from "./header.module.css";



function Header({isDark, dispatch}){
    return(
        <header className={style.header} >
            <h1 className={isDark ?         style.logoDark : ""} >I Notes</h1>

            <button onClick={() => dispatch({type: "handleDarkMode"})} className={style.modeBtn} >
                {
                    isDark ? 
                    <i className={`bx bxs-sun bx-sm ${style.modeIcon}`} ></i>
                    :
                    <i className='bx bxs-moon bx-sm' ></i>
                }
            </button>
        </header>
    )
}


export default Header;
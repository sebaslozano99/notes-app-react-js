import style from "./header.module.css";



function Header({isDark, dispatch}){
    return(
        <header className={style.header} >
            <h1 className={isDark ?         style.logoDark : ""} >I Notes</h1>

            <button onClick={() => dispatch({type: "handleDarkMode"})} className={style.modeBtn} >Toggle mode</button>
        </header>
    )
}


export default Header;
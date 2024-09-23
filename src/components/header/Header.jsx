import style from "./header.module.css";



function Header({isDark, onDarkMode}){
    return(
        <header className={style.header} >
            <h1 className={isDark ?         style.logoDark : ""} >I Notes</h1>

            <button onClick={onDarkMode} className={style.modeBtn} >Toggle mode</button>
        </header>
    )
}


export default Header;
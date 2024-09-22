import style from "./header.module.css";

function Header(){
    return(
        <header className={style.header} >
            <h1>I Notes</h1>

            <button>Toggle mode</button>
        </header>
    )
}


export default Header;
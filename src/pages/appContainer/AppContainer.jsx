import { useNotes } from "../../context/NotesContext";
import styles from "./AppContainer.module.css";

export default function AppContainer({children}) {
  
  const { isDark } = useNotes();  

  return (
    <div className={!isDark ? styles.container : `${styles.container} ${styles.dark}`} >
      {children}
    </div>
  )
}

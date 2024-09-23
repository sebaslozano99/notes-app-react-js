import styles from "./noteItem.module.css";


function NoteItem ({note, onDeleteNote}){
  return (
    <div className={styles.note} >
      <p className={styles.note__text} >{note.note}</p>
      
      <div className={styles.note__div} >
        <p>{note.date}</p>

        <button  className={styles.note__div_button} onClick={() => onDeleteNote(note.id)} >
          <i className='bx bxs-trash-alt bx-sm'></i>
        </button>
      </div>
    </div>
  )
}

export default NoteItem

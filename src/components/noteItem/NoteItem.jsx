import { useState } from "react";
import styles from "./noteItem.module.css";
import { useNotes } from "../../context/NotesContext";



function NoteItem ({note}){

  const [textToUpdate, setTextToUpdate] = useState(note.note);

  const { 
    TEXT_AREA_LIMIT : textAreaLimit, 
    handleDeleteNote: onDeleteNote, 
    handleSetAsUpdating: onUpdatingNote, 
    handleUpdateNote: onUpdateNote   
  } = useNotes();

  return (
    <div className={styles.note} >

      <h2>{note.title}</h2>

      { 
        !note.isUpdating ?
          <textarea cols={50} rows={100} className={styles.note__textArea} maxLength={textAreaLimit} placeholder='type to add a note...' spellCheck={false} onClick={() => onUpdatingNote(note.id)} defaultValue={note.note} ></textarea>
        :
          <textarea cols={50} rows={100} className={styles.note__textArea} maxLength={textAreaLimit} placeholder='type to add a note...' spellCheck={false} value={textToUpdate} onChange={(e) => setTextToUpdate(e.target.value)} > </textarea>
      }
      
      <div className={styles.note__div} >

        <p>{note.date}</p>

        <div className={styles.note__div__btnContainer} >

          { note.isUpdating && <button className={styles.btnContainer__save} onClick={() => onUpdateNote(note.id, textToUpdate)} >Save</button>}

          <button  className={styles.btnContainer__delete} onClick={() => onDeleteNote(note.id)} >
            <i className='bx bxs-trash-alt bx-sm'></i>
          </button>

        </div>

      </div>


    </div>
  )
}

export default NoteItem

import React, { useState } from 'react';
import styles from "./notesContainer.module.css";
import { v4 as uuidv4 } from 'uuid';
// import NoteItem from '../noteItem/NoteItem';





function NotesContainer ({onAddNote, TEXT_AREA_LIMIT, children}){
  
  const [title, setTitle] = useState("");
  const [textArea, setTextArea] = useState("");
  const [remainingCharacters, setRemainingCharacters] = useState(TEXT_AREA_LIMIT);



  function submitNewNote(e){
    e.preventDefault();

    if(!textArea || !title) return;

    const currentDate = new Date();

    const newNote = {
      id: uuidv4(),
      title: title.toUpperCase(),
      note: textArea,
      date: currentDate.toLocaleDateString(),
      isUpdating: false,
      category: "all"
    }

    onAddNote(newNote);

    setTitle("");
    setTextArea("");
    setRemainingCharacters(TEXT_AREA_LIMIT);
  }


  function updateRemainingCharacters(e){
    const newTextArea = e.target.value;
    setTextArea(newTextArea);
    setRemainingCharacters(TEXT_AREA_LIMIT - newTextArea.length);
  }


  return (
    <main className={styles.main} >

      { children }
      
      <form className={styles.note} onSubmit={submitNewNote} >

        <input type="text" className={styles.note__title} placeholder='Type to add title...' value={title} onChange={(e) => setTitle(e.target.value)} required />
        
        <textarea cols={50} rows={100} maxLength={TEXT_AREA_LIMIT} placeholder='type to add a note...' spellCheck={false} className={styles.note__textArea} value={textArea} onChange={updateRemainingCharacters} required ></textarea>

        <div className={styles.note__infoContainer} >

          <p>{remainingCharacters} remaining</p>

          <button className={styles.note__infoContainer_button} >Save</button>

        </div>

      </form>

    </main>
  )
}

export default NotesContainer

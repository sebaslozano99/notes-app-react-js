import React, { useState } from 'react';
import styles from "./notesContainer.module.css";
import NoteItem from '../noteItem/NoteItem';
import { v4 as uuidv4 } from 'uuid';


const TEXT_AREA_LIMIT = 300;



function NotesContainer ({notes, onAddNote, onDeleteNote}){
  
  const [textArea, setTextArea] = useState("");
  const [remainingCharacters, setRemainingCharacters] = useState(TEXT_AREA_LIMIT);



  function submitNewNote(e){
    e.preventDefault();

    if(!textArea) return;

    const currentDate = new Date();

    const newNote = {
      id: uuidv4(),
      note: textArea,
      date: currentDate.toLocaleDateString(),
    }

    onAddNote(newNote);

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

      {
        notes.map((note) => <NoteItem note={note} key={note.id} onDeleteNote={onDeleteNote} />)
      }

    <form className={styles.note} onSubmit={submitNewNote} >
        
        <textarea cols={50} rows={100} maxLength={TEXT_AREA_LIMIT} placeholder='type to add a note...' className={styles.note__textArea} value={textArea} onChange={updateRemainingCharacters} ></textarea>

        <div className={styles.note__infoContainer} >

          <p>{remainingCharacters} remaining</p>

          <button className={styles.note__infoContainer_button} >Save</button>

        </div>

      </form>

    </main>
  )
}

export default NotesContainer

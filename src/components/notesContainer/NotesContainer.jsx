import React from 'react';
import styles from "./notesContainer.module.css";



function NotesContainer (){
  return (
    <main className={styles.main} >

      <form className={styles.note} >
        <textarea cols={50} rows={100} maxLength={200} placeholder='type to add a note...' className={styles.note__textArea} ></textarea>

        <div className={styles.note__infoContainer} >

          <p>200 remaining</p>
          
          <button className={styles.note__infoContainer_button} >Save</button>

        </div>
      </form>

        <textarea className={styles.note} >

        </textarea>

        <textarea className={styles.note} >

        </textarea>

        {/* <div className={styles.note} >

        </div> */}

        {/* <div className={styles.note} >

        </div> */}
        
    </main>
  )
}

export default NotesContainer

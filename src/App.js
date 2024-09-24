import { useState } from "react";
import Header from "./components/header/Header";
import NotesContainer from "./components/notesContainer/NotesContainer";
import SearchBar from "./components/searchBar/SearchBar";



function App(){

  const [notes, setNotes] = useState(() => {
    const arrayOfNotes = localStorage.getItem("notes");
    return arrayOfNotes ? JSON.parse(arrayOfNotes) : [];
  });
  const [isDark, setIsDark] = useState(false);

  
  function handleAddNote(newNote){
    setNotes((c) => [...c, newNote]);
    localStorage.setItem("notes", JSON.stringify([...notes, newNote]));
  }


  function handleDeleteNote(id){
    setNotes((c) => [...c.filter((note) => note.id !== id)]);
    localStorage.setItem("notes", JSON.stringify([...notes.filter((note) => note.id !== id)]));
  }

  function handleSetAsUpdating(id){
    setNotes((c) => [...c.map((note) => note.id === id ? {...note, isUpdating: !note.isUpdating} : note)]);
  }

  function handleUpdateNote(id, newNote){
    setNotes((c) => [...c.map((note) => note.id === id ? {...note, note: newNote, isUpdating: false} : note)]);
    localStorage.setItem("notes", JSON.stringify([...notes.map((note) => note.id === id ? {...note, note: newNote, isUpdating: false} : note)]));
  }


  function handleDarkMode(){
    setIsDark((mode) => !mode);
  }


  return (
    <div className={isDark ? "container dark" : "container"} >
      <Header isDark={isDark} onDarkMode={handleDarkMode} />
      <SearchBar />
      <NotesContainer notes={notes} onAddNote={handleAddNote} onDeleteNote={handleDeleteNote} onSetAsUpdating={handleSetAsUpdating} onUpdateNote={handleUpdateNote} />
    </div>
  )
}




export default App;
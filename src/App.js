import { useState } from "react";
import Header from "./components/header/Header";
import NotesContainer from "./components/notesContainer/NotesContainer";
import SearchBar from "./components/searchBar/SearchBar";



function App(){

  const [notes, setNotes] = useState([]);
  const [isDark, setIsDark] = useState(false);

  
  function handleAddNote(newNote){
    setNotes((c) => [...c, newNote]);
  }


  function handleDeleteNote(id){
    setNotes((c) => [...c.filter((note) => note.id !== id)])
  }


  function handleDarkMode(){
    setIsDark((mode) => !mode);
  }


  return (
    <div className={isDark ? "container dark" : "container"} >
      <Header isDark={isDark} onDarkMode={handleDarkMode} />
      <SearchBar />
      <NotesContainer notes={notes} onAddNote={handleAddNote} onDeleteNote={handleDeleteNote} />
    </div>
  )
}




export default App;
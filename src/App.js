import { useState } from "react";
import Header from "./components/header/Header";
import NotesContainer from "./components/notesContainer/NotesContainer";
import SearchBar from "./components/searchBar/SearchBar";


function App(){

  const [notes, setNotes] = useState([]);

  function handleAddNote(){
    
  }

  return (
    <div>
      <Header />
      <SearchBar />
      <NotesContainer />
    </div>
  )
}




export default App;
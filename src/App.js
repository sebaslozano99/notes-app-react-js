import { useReducer } from "react";
import Header from "./components/header/Header";
import NotesContainer from "./components/notesContainer/NotesContainer";
import SearchBar from "./components/searchBar/SearchBar";
import NoteItem from "./components/noteItem/NoteItem";

const initialState = {
  notes: JSON.parse(localStorage.getItem("notes")) ?? [],
  isDark: false,
}


function reducer(state, action){
  switch(action.type){
    case "addNote": 
      return {
        ...state,
        notes: [...state.notes, action.payload],
      };
    
    case "deleteNote":
      return {
        ...state,
        notes: [...state.notes.filter((note) => note.id !== action.payload)]
      };
    
    case "setAsUpdating":
      return {
        ...state,
        notes: [...state.notes.map((note) => note.id === action.payload ? {...note, isUpdating: !note.isUpdating} : note)]
      }

    case "updateNote":
      return {
        ...state,
        notes: [...state.notes.map((note) => note.id === action.payload.id ? {...note, note: action.payload.newNote, isUpdating: false} : note)]
      }

    case "handleDarkMode":
      return {
        ...state,
        isDark: !state.isDark,
      }
    
    default: 
      throw new Error("Unknown action type!");
  }
}

const TEXT_AREA_LIMIT = 500;


function App(){
  const [{notes, isDark}, dispatch] = useReducer(reducer, initialState);


  
  function handleAddNote(newNote){
    dispatch({type: "addNote", payload: newNote});
    localStorage.setItem("notes", JSON.stringify([...notes, newNote]));
  }

  
  function handleDeleteNote(id){
    dispatch({type: "deleteNote", payload: id});
    localStorage.setItem("notes", JSON.stringify([...notes.filter((note) => note.id !== id)]));
  }


  function handleSetAsUpdating(id){
    dispatch({type: "setAsUpdating", payload: id});

  }


  function handleUpdateNote(id, newNote){
    dispatch({type: "updateNote", payload: {id, newNote} });
    localStorage.setItem("notes", JSON.stringify([...notes.map((note) => note.id === id ? {...note, note: newNote, isUpdating: false} : note)]));
  }


  return (
    <div className={isDark ? "container dark" : "container"} >

      <Header isDark={isDark} dispatch={dispatch} />

      <SearchBar />

      <NotesContainer notes={notes} TEXT_AREA_LIMIT={TEXT_AREA_LIMIT} onAddNote={handleAddNote} >
        {
          notes.map((note) => <NoteItem note={note} key={note.id} textAreaLimit={TEXT_AREA_LIMIT} onDeleteNote={handleDeleteNote} onUpdatingNote={handleSetAsUpdating} onUpdateNote={handleUpdateNote}  />)
        }
      </NotesContainer>
      
    </div>
  )
}




export default App;
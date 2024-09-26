import { useReducer } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Homepage from "./pages/homepage/Homepage";
import Plans from "./pages/plans/Plans";
import Notes from "./pages/notes/Notes";

import Header from "./components/header/Header";





const initialState = {
  notes: JSON.parse(localStorage.getItem("notes")) ?? [],
  isDark: false,
  search: "",
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
    
    case "setSearch":
      return {
        ...state,
        search: action.payload,
      }
    
    default: 
      throw new Error("Unknown action type!");
  }
}



const TEXT_AREA_LIMIT = 500;





function App(){
  const [{notes, isDark, search}, dispatch] = useReducer(reducer, initialState);


  
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
    <div className={isDark ? "container dark" : "container"}>
      
      <BrowserRouter>
        <Header isDark={isDark} dispatch={dispatch} />
        <Routes>
          <Route path="/" element={ <Homepage /> } />
          <Route path="/plans" element={ <Plans /> } />
          <Route path="/notes" element={ <Notes isDark={isDark} search={search} notes={notes} handleAddNote={handleAddNote} handleDeleteNote={handleDeleteNote} handleSetAsUpdating={handleSetAsUpdating} handleUpdateNote={handleUpdateNote} TEXT_AREA_LIMIT={TEXT_AREA_LIMIT} dispatch={dispatch} /> } />
        </Routes>
      </BrowserRouter>

    </div>
  )
}




export default App;
import { BrowserRouter, Routes, Route } from "react-router-dom";


import AppContainer from "./pages/appContainer/AppContainer";
import Homepage from "./pages/homepage/Homepage";
import Plans from "./pages/plans/Plans";
import Notes from "./pages/notes/Notes";

import Header from "./components/header/Header";
import NotesProvider from "./context/NotesContext";






function App(){


  return (
    <NotesProvider>
      <AppContainer>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={ <Homepage /> } />
            <Route path="/plans" element={ <Plans /> } />
            <Route path="/notes" element={ <Notes  /> } />
          </Routes>
        </BrowserRouter>
      </AppContainer>
    </NotesProvider>
  )
}




export default App;
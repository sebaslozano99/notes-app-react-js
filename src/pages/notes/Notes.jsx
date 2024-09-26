import SearchBar from "../../components/searchBar/SearchBar";
import NotesContainer from "../../components/notesContainer/NotesContainer";
import NoteItem from "../../components/noteItem/NoteItem";


export default function Notes({search, notes, handleAddNote, handleDeleteNote, handleSetAsUpdating, handleUpdateNote, TEXT_AREA_LIMIT, dispatch}) {
  return (
    <>


        <SearchBar search={search} dispatch={dispatch} />

        <NotesContainer notes={notes} TEXT_AREA_LIMIT={TEXT_AREA_LIMIT} onAddNote={handleAddNote} >
          {
            notes.filter((note) => note.title.toLowerCase().includes(search.toLowerCase())).map((note) => <NoteItem note={note} key={note.id} textAreaLimit={TEXT_AREA_LIMIT} onDeleteNote={handleDeleteNote} onUpdatingNote={handleSetAsUpdating} onUpdateNote={handleUpdateNote}  />)
          }
        </NotesContainer>
        
      </>
  )
}

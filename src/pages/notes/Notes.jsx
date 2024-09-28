import SearchBar from "../../components/searchBar/SearchBar";
import NotesContainer from "../../components/notesContainer/NotesContainer";
import NoteItem from "../../components/noteItem/NoteItem";
import { useNotes } from "../../context/NotesContext";


export default function Notes() {

  const { notes, search } = useNotes();

  return (
    <>
      <SearchBar />

      <NotesContainer >
        {
          notes.filter((note) => note.title.toLowerCase().includes(search.toLowerCase()) || note.date.includes(search)).map((note) => 
          <NoteItem note={note} key={note.id} />  )
        }
      </NotesContainer> 
    </>

  )
}

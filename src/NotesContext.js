const { createContext, useContext, useState } = require("react");

export const NotesContext = createContext({
    notes:[{text:"Hello, i'm default value", id:0}]
})

export const NotesProvider = ({children}) => {
    const [notes, setNotes] = useState([])
    
    const addNote = (text) => {
        setNotes([...notes, {text: text, id: Math.random()}])
        console.log("notes", ...notes);
    }

    const removeNote = (id) => {
        setNotes(notes.filter(note=>note.id!==id))
    }

    return <NotesContext.Provider value={{notes, addNote, removeNote}}>
        {children}
    </NotesContext.Provider>
}

export const useNotesContext = () => useContext(NotesContext)
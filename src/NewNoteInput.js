import { useState } from "react"
import {useNotesContext} from "./NotesContext"

export const NewNoteInput = () => {
    const [text, setText] = useState("")
    const {addNote} = useNotesContext()

    const onChangeInput = (event) => {
        setText(event.target.value)
    }

    const addNewNote = () => {
        addNote(text)
    }

    return <>
        <input onChange={onChangeInput} value={text}></input>
        <button type="submit" onSubmit={addNewNote}>Add</button>
    </>


}
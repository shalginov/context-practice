import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {NewNoteInput} from "./NewNoteInput"
import {NotesContext}from "./NotesContext"
import {NotesProvider} from "./NotesContext"


const App = () => {
  const {notes, removeNote} = React.useContext(NotesContext)

  return <div>
    <NewNoteInput></NewNoteInput>
    <ul>
      {notes.map(note=><li>{note}</li>)}
    </ul>
  </div>
}


ReactDOM.render(
  <NotesProvider>
    <App />
  </NotesProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

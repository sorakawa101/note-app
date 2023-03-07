import { useState } from 'react';
import uuid from 'react-uuid';
import './App.css'
import Main from './components/Main'
import Sidebar from './components/Sidebar'

function App() {

  const [notes, setNotes] = useState([]);
  const [activeNote, setActiveNote] = useState(false);

  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: "new note",
      content: "new note content",
      modDate: Date.now(),
    };
    setNotes([...notes, newNote]); // NOTE: 配列への追加方法（スプレッド構文）

    console.log(notes);
    console.log("Added New Note!");
  };

  const onDeleteNote = (id) => {
    // NOTE: filterNotes note.id !== idの条件を満たす配列。つまり、削除ボタンを押したノートのidと異なるIDを持つノートのみ残った配列
    const filterNotes = notes.filter((note) => note.id !== id);
    setNotes(filterNotes);
  };

  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNote)
  }

  return (
    <div className="App">
        <Sidebar
          onAddNote={onAddNote}
          notes={notes}
          onDeleteNote={onDeleteNote}
          activeNote={activeNote}
          setActiveNote={setActiveNote}
        />
        <Main activeNote={getActiveNote()} />
    </div>
  )
}

export default App

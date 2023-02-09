import { useState } from 'react';
import './App.css'
import Main from './components/Main'
import Sidebar from './components/Sidebar'

function App() {

  const [notes, setNotes] = useState([]);

  const onAddNote = () => {
    const newNote = {
      id: 1,
      title: "new note",
      content: "new note content",
      modDate: Date.now(),
    };
    setNotes([...notes, newNote]); // NOTE: 配列への追加方法（スプレッド構文）

    console.log(notes);
    console.log("Added New Note!");
  };

  return (
    <div className="App">
        <Sidebar onAddNote={onAddNote} notes={notes} />
        <Main />
    </div>
  )
}

export default App

import React from 'react'
import "./Sidebar.css"

function Sidebar({ onAddNote, notes, onDeleteNote, activeNote, setActiveNote }) {

    const sortedNotes = notes.sort((a, b) => b.modDate - a.modDate);

    return (
    <div className='app-sidebar'>
        <div className='app-sidebar-header'>
            <h1>Note</h1>
            {/* NOTE: onAddNote 引数がないのでアロー関数で書く必要はない */}
            <button onClick={onAddNote}>Add</button>
        </div>
        <div className={"app-sidebar-notes"}>
            {sortedNotes.map((note) => (
                // NOTE: map関数を適用した一番親要素にkeyを設定する必要がある
                // NOTE: note.id === activeNote の条件が満たされたら、"active"をクラス名に追加
                <div className={`app-sidebar-note ${note.id === activeNote && "active"}`} key={note.id} onClick={() => setActiveNote(note.id)}>
                    <div className="sidebar-note-title">
                        <strong>{note.title}</strong>
                        {/* NOTE: () => onDeleteNote 引数を取るメソッドはアロー関数で書かないと、リロードで発火してしまう */}
                        <button onClick={() => onDeleteNote(note.id)}>Delete</button>
                    </div>
                    <p>{note.content}</p>
                     {/* NOTE: 修正時間を日本時間表記に対応 */}
                    <small>{new Date(note.modDate).toLocaleDateString("ja-JP", {
                        hour: "2-digit",
                        minute: "2-digit",})}</small>
                </div>
            ))}
        </div>
    </div>
    )
}

export default Sidebar

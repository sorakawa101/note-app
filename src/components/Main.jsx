import React from 'react'
import "./Main.css"

function Main() {
    return (
        <div className='app-main'>
            <div className="app-main-note-edit">
                <input type="text" />
                <textarea id="" placeholder='Edit yout note contents.'></textarea>
            </div>
            <div className="app-main-note-preview">
                <h1 className="preview-title">Title</h1>
                <div className="markdown-preview">Note Contents</div>
            </div>
        </div>
    )
}

export default Main

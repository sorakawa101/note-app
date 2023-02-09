import React from 'react'
import "./Sidebar.css"

function Sidebar({ onAddNote }) {
    return (
    <div className='app-sidebar'>
        <div className='app-sidebar-header'>
            <h1>Note</h1>
            <button onClick={onAddNote}>Add</button>
        </div>
        <div className="app-sidebar-notes">
            <div className="app-sidebar-note">
                <div className="sidebar-note-title">
                    <strong>Title</strong>
                    <button>Delete</button>
                </div>
                <p>Note Contents</p>
                <small>Fixed Date: 02/09</small>
            </div>
        </div>
    </div>
    )
}

export default Sidebar

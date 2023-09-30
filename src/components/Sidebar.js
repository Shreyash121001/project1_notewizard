import React, { useState } from 'react'
import plusIcon from './plusIcon.png';
import './NoteWizard.css'

const Sidebar = (props) => {

    const [listOpen, setlistOpen] = useState(false);

    const colors = ["#fe9b72", "#fec971", "#00d4fe", "#b693fd", "#e4ee91"];



    return (
        <div className="sidebar">

            <div className={`sidebar_list ${listOpen ? "sidebar_list_active" : ""}`}>
                <img src={plusIcon} alt="Add" onClick={() => setlistOpen(!listOpen)} />
                {colors.map((item, index) => (
                    <div
                        key={index}
                        className="sidebar_list_item"
                        style={{
                            backgroundColor: item
                        }}
                        onClick={() => props.addNote(item)}
                    />
                ))}
            </div>
            <button type="button" className="btn btn-dark" onClick={() => props.deleteAllNotes()}>
                Clear 
                <span class='large'> all Notes</span>
            </button>
        </div>
    )
}

export default Sidebar

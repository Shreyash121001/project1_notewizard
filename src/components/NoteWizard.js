import React, { useEffect, useState, useContext } from 'react'
import NoteContainer from './NoteContainer'
import Note from './Note'
import Sidebar from './Sidebar'
import { NoteContext } from './NoteContext';
// import { useNavigate } from 'react-router';

const NoteWizard = () => {

    const { notes, addNote, deleteNote, updateText, deleteAllNotes } = useContext(NoteContext);

    // const navigate = useNavigate();
    // useEffect(() => {
    //     localStorage.setItem('lastVisitedPage', '/');
    //   }, []);

    return (    
        <div className='NotesApp'>
            <h2 className='head1' style={{ textAlign: "center" }}>NoteWizard</h2>
            <h5 className='head2' style={{ textAlign: "center" }}>Your Ultimate Note-Taking Assistant</h5>
            {/* <span style={{ display: 'flex'}}> */}

            <div><Sidebar addNote={addNote} deleteAllNotes={deleteAllNotes} /></div>

            <div style={{ display: 'flex', justifyContent: 'center' }} ><NoteContainer notes={notes} deleteNote={deleteNote} updateText={updateText} /></div>
            {/* </span> */}
        </div>
    )
}

export default NoteWizard
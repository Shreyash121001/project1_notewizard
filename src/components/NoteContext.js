import React, { createContext, useState, useEffect } from 'react';

// Create the NoteContext
const NoteContext = createContext();

// Create a provider component to wrap the components that need access to the context
const NoteProvider = ({ children }) => {
    const [notes, setNotes] = useState(
        JSON.parse(localStorage.getItem('notes-app')) || []
    );

    // Define functions to update the notes
    const addNote = (color) => {
        const tempNote = [...notes];
        tempNote.push({
            id: Date.now() + " " + Math.floor(Math.random * 78),
            text: " ",
            time: Date.now(),
            color
        })
        setNotes(tempNote);
    };

    const deleteNote = (id) => {
        const tempNotes = [...notes];
        const index = tempNotes.findIndex(item => item.id === id);
        if (index < 0) return;
        tempNotes.splice(index, 1);
        setNotes(tempNotes);
    };

    const updateText = (text, id) => {
        const tempNotes = [...notes];
        const index = tempNotes.findIndex(item => item.id === id);
        if (index < 0) return;
        tempNotes[index].text = text;
        setNotes(tempNotes);
    };

    const deleteAllNotes = () => {
        setNotes([]); // Clears all the notes by setting the state to an empty array
    };

    // Create the context value
    const contextValue = {
        notes,
        addNote,
        deleteNote,
        updateText,
        deleteAllNotes
    };


    useEffect(() => {
        localStorage.setItem('notes-app', JSON.stringify(notes));
    }, [notes]);


    return (
        <NoteContext.Provider value={contextValue}>{children}</NoteContext.Provider>
    );
};

export { NoteContext, NoteProvider };

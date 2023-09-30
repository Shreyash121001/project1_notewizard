import React, { useContext } from 'react';
import { NoteContext } from './NoteContext';
import Note from './Note';
import './NoteWizard.css';

const NoteContainer = () => {
  // No props passed

  const { notes, deleteNote, updateText } = useContext(NoteContext);

    const reverseArray=(arr)=>{
        const array = []
        for(let i=arr.length-1;i>=0;--i){
            array.push(arr[i])
        }
        return array
    }

  
  return (  
    <div className="note-container">
      {/* <h2 style={{ textAlign: "center"}}>Notes</h2><br /> */}
      <div className="note-container_notes">
        {reverseArray(notes).length>0 ? reverseArray(notes).map((item) => (
          <Note key={item.id} note={item} deleteNote={deleteNote} updateText={updateText} />
        )): <h5>No Notes present</h5>}
        <br/>
      </div>
      <br/>    
    </div>
  );
}

export default NoteContainer;

import React, { useState, useContext, useEffect } from 'react';
import { NoteContext } from './NoteContext';
import './NoteWizard.css';
import delete_icon from './delete_icon.png';
import whatsapp from './whatsapp.png';

let timer = 500;
let timeout;

const Note = (props) => {
  const { updateText } = useContext(NoteContext);
  const {openWhatsApp } = useContext(NoteContext);
  const [text, setText] = useState(props.note.text);

  useEffect(() => {
    const timeout = setTimeout(() => {
      updateText(text, props.note.id);
    }, 500);

    return () => clearTimeout(timeout);
  }, [text, updateText, props.note.id]);

  const formatDate = (value) => {
    if (!value) return " ";
    const date = new Date(value);
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
    ];

    let hrs = date.getHours();
    let ampm = hrs >= 12 ? "PM" : "AM";
    hrs = hrs > 12 ? hrs - 12 : hrs;
    hrs = hrs == 0 ? 12 : hrs;
    let min = date.getMinutes();
    min = min < 10 ? "0" + min : min;
    let day = date.getDate();
    const month = monthNames[date.getMonth()];

    return `${hrs}:${min} ${ampm}, ${day} ${month}`;
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };



  // return (
  //   <div>
  //     <button onClick={openWhatsApp}>Send WhatsApp Message</button>
  //   </div>
  // );

  return (
    <div className="note" style={{ backgroundColor: props.note.color }}>
      <textarea className="note_text" value={text} onChange={handleTextChange} style={{ width: '100%', overflow: 'auto' }} />
      <span className='note_footer'>
        <strong>{formatDate(props.note.time)}</strong>
        <img src={delete_icon} alt="DELETE" onClick={() => props.deleteNote(props.note.id)} />
        <img src={whatsapp} alt="WHATSAPP" onClick={() => props.openWhatsApp(text)} />
      </span>
    </div>
  );
};

export default Note;

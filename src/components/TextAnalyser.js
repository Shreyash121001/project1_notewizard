import React, { useState } from 'react'
import './../App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';


export default function TextAnalyser(props) {
    const handleUpClick = ()=> {
        //console.log("Button 1 was clicked.");
        setText(text.toUpperCase())
    }

    const handleLoClick = ()=> {
        //console.log("Button 1 was clicked.");
        setText(text.toLowerCase())
    }

    const handleOnChange = (event)=> {
        //console.log("Handle on change was called");
        setText(event.target.value);        
    }

    const handleExClick = ()=> {
        //console.log("Handle on change was called");
        setText(text.replace(/[\s\r\n]+/g, ' ').trim());        
    }

    const handleCopyClick = ()=> {
        //console.log("Button 1 was clicked.");
        navigator.clipboard.writeText(text);
    }

    const handleClear = (event)=> {
        //console.log("Handle on change was called");
        setText("");        
    }

    const [text, setText] = useState('');
    // wrong way : text = "new text"; 
    // setText("New text");
    return (
        <div className='textform'>
            
            <h2 style={{"textAlign":"center"}}>TextAnalyser</h2>
            <div className="mb-3" ><br />       
                <textarea className="form-control" value={text} onChange={handleOnChange} id="my-box" rows="12"></textarea>
            </div>
            
            <div className='options' >
                <button type="button" className="t btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
                <button type="button" className="t btn btn-success" onClick={handleLoClick}>Convert to LowerCase</button>
                <button type="button" className="t btn btn-warning" onClick={handleExClick}>Remove extra spaces</button>
                <button type="button" className="t btn btn-danger" onClick={handleCopyClick}>Copy to Clipboard</button>
                <button type="button" className="t btn btn-secondary" onClick={handleClear}>Clear Text</button>
            </div><br/>
            <h4 >Text Summary</h4>
            <p> {text.trim().split(/\s+/).filter(word => word !== "").length} words, {text.length} characters</p>
        </div>  
    )
}

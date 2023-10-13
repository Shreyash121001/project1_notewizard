import './App.css';
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import TextAnalyser from './components/TextAnalyser';
import About from './components/About'
import {
  // BrowserRouter as Router,
  HashRouter as Router,
  Routes,
  Route,
  Link,
  // useNavigate
} from "react-router-dom";
import NoteWizard from './components/NoteWizard';
import Note from './components/Note';
import NoteContainer from './components/NoteContainer';
import { NoteProvider } from './components/NoteContext';



// props are variables that control the state of a component


// routes specify the links where the components are located.
// routes are used to map components to url

function App() {

  
  return (
    <div className='root'>
      <Router>
        <Navbar title="NoteWizard" aboutText="About" />
        <Routes>
          {/* <Route path="/" element={<TextForm heading="TextAnalyser" />} /> */}
          <Route path="/" element={<NoteProvider><NoteWizard /></NoteProvider>} />
          <Route path="/project1_notewizard" element={<NoteProvider><NoteWizard /></NoteProvider>} />
          <Route path="//textanalyser" element={<TextAnalyser />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}


export default App; 

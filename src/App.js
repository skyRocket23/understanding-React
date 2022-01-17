import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import About from './components/About';
import React, { useEffect, useState } from "react";

function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
    <Navbar title="TextUtils2" mode={mode} toggleMode={toggleMode}/>
    <div className="container">
      {/* <About/> */}
        <TextForm heading="Text-Analyser" mode={mode}/>
    </div>
      
    </>
  );
}

export default App;

import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const [btnText, setBtnText] = useState('Enable Dark Mode')

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      setBtnText('Enable Light Mode');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode Enabled", "success");
    }
    else {
      setMode('light');
      setBtnText('Enable Dark Mode');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Enabled", "success");

    }
  }

  return (
    <>
      <Router>
        <Navbar title="Text Utility" mode={mode} toggleMode={toggleMode} btnText={btnText} />
        <div className="container my-3">
          <Alert alert={alert} />
          <Routes>
            <Route path="/about" element={<About mode={mode} />} />
            <Route path="" element={<TextForm heading="Enter the text below to analyse" mode={mode} showAlert={showAlert} />} />
          </Routes>
        </div>
      </Router >
    </>
  );
}

export default App;

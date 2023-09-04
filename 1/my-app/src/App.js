import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import DisplayLanguage from "./DisplayLanguage";
import React from "react";
import { LanguageContext } from "./LanguageContext";

function App() {
  const [language, setLanguage] = useState("English");

  const handleChangeLanguage = (event) => {
    setLanguage(event.target.value);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <select onChange={handleChangeLanguage} value={language}>
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            <option value="French">French</option>
            <option value="Italian">Italian</option>
          </select>
          <LanguageContext.Provider value={language}>
            <DisplayLanguage />
          </LanguageContext.Provider>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

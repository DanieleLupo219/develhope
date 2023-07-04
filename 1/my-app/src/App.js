import logo from "./logo.svg";
import "./App.css";
import Message from "./Message";
import InteractiveWelcome from "./InteractiveWelcome";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <InteractiveWelcome name={<strong>Dan</strong>} />
        <Message />
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

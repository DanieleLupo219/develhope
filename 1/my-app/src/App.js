import logo from "./logo.svg";
import "./App.css";
import Message from "./Message";
import Welcome from "./Welcome";
import ClickTracker from "./ClickTracker";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ClickTracker />
        <Welcome name={<strong>Dan</strong>} age={15} />
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

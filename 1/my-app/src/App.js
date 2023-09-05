import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import Counter from "./Counter";
import ShowGitHubUser from "./ShowGitHubUser";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Link to="/counter">Counter</Link>
        <Link to="/users/DanieleLupo219">My GitHub Username</Link>
        <Routes>
          <Route path="/counter" element={<Counter />} />
          <Route path="/users/:username" element={<ShowGitHubUser />} />
        </Routes>
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

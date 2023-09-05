import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import Counter from "./Counter";
import ShowGitHubUser from "./ShowGitHubUser";
import GitHubUserList from "./GitHubUserList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Link to="/counter">Counter</Link>
        <Link to="/users/DanieleLupo219">My GitHub Username</Link>
        <Routes>
          <Route path="/counter" element={<Counter />} />
          <Route path="*" element={<h1>Sorry, page not found!</h1>} />
          <Route path="/users" element={<GitHubUserList />}>
            <Route path=":username" element={<ShowGitHubUser />} />
          </Route>
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

import logo from "./logo.svg";
import "./App.css";
import FilteredList from "./FilteredList";

const list = [
  {
    name: "Daniele",
    age: 23,
    id: 1,
  },
  {
    name: "Edoardo",
    age: 24,
    id: 2,
  },
  {
    name: "Giorgia",
    age: 17,
    id: 3,
  },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <FilteredList list={list} />
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

import logo from "./logo.svg";
import "./App.css";
import CarDetails from "./CarDetails";

const carData = {
  model: "Tesla",
  year: "2020",
  color: "White",
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <CarDetails initialData={carData} />
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

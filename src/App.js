import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <Weather />
        <p>
          {" "}
          This project was coded by Gabriella Dubas and is open sourced on{" "}
          <a
            href="https://github.com/Had1na/weather-react"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;

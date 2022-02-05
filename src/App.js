import logo from './logo.svg';
import './App.css';
import axios from "axios";
const API_URL = process.env.REACT_APP_BACKEND_URL

function App() {

  const message = axios.get( `${API_URL}test`).then(response => {
    console.log(response)
  })
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Change it and control S <code>src/App.js</code> and save to reload.
        </p>
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

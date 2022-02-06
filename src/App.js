import logo from './logo.svg';
import './App.css';
import FirstComponent from './components/FirstComponent';
import FirstHook from './components/FirstComponentHook';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Change it and control S <code>src/App.js</code> and save to reload.
        </p>
        <FirstComponent netisbutt={"The Best"}/>
        <FirstHook netisbutt={"The very Best"}/>
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

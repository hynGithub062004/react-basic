import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';

function App() {

  const handleEventClick = (e) => {
    console.log(e.target.value)
  }

  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello world with React
        </p>
        <input type='text' value='eric' onClick={(e) => handleEventClick(e)}/>
        <button
          type='button'
          onClick={(e) => handleEventClick(e)}
        >
          click me
        </button>
      </header>
    </div>
  );
}

export default App;

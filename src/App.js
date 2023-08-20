import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';

function App() {

  // let name = 'huyen'
  // let boolean = true
  // let obj = {name: 'huyen', chanel: 'huyendev'}
  let link = 'https://github.com/hynGithub062004'

  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello world with React
        </p>
        <a href={link}>Visit my Github</a>
        
      </header>
    </div>
  );
}

export default App;

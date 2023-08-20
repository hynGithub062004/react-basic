import logo from './logo.svg';
import './App.css';

function App() {

  // let name = 'huyen'
  // let boolean = true
  // let obj = {name: 'huyen', chanel: 'huyendev'}
  let link = 'https://github.com/hynGithub062004'

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello world with React
        </p>
        <a href={link} target='_blank'>Visit my Github</a>
        
      </header>
    </div>
  );
}

export default App;

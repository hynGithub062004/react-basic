import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import { useState } from 'react';

function App() {

  const [name, setName] = useState('huyen')
  const [input, setInput] = useState('')
  const [todos, setTodos] = useState([
    {id: 'todo1', title: 'Watching Hoi Dan IT Chanel'},
    {id: 'todo2', title: 'sweeping'},
    {id: 'todo3', title: 'playing game'}
  ])

  const handleEventClick = () => {
    if(!input) {
      alert('emty input')
      return;
    }
    let newTodo = {id: 'abc', title: input}
    setTodos([...todos, newTodo])
    setInput('')
  }

  const handleInput = (e) => {
    setInput(e.target.value)
  }

  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello world with React {name} !
        </p>
        <ul>
          {todos.map((todo, index) => (
            <li className="todo-child" key={index}>{todo.title}</li>
          ))}
        </ul>
        <input type='text' value={input} onChange={(e) => handleInput(e)}/>
        <button
          type='button'
          onClick={() => handleEventClick()}
        >
          click me
        </button>
      </header>
    </div>
  );
}

export default App;



function Todo(props) {

    console.log(props);
    return ( 
        <ul>
          {props.todos.map((todo, index) => (
            <li className="todo-child" key={index}>{todo.title}</li>
          ))}
        </ul>
     );
}

export default Todo;
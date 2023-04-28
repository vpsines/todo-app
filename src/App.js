import "./App.css";
import { useState } from "react";
import {FaPlus,FaRegTrashAlt} from "react-icons/fa"

let globalId = 0

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodo] = useState([]);

  function onInputChange(e) {
    setTask(e.target.value);
  }

  function createToDo(event) {
    event.preventDefault();
    setTodo((oldTodos) => {
      setTask("");
      return [...oldTodos, {task,id:globalId++}];
    });
  }

  function deleteTodo(id){
    setTodo(oldTodos => oldTodos.filter(todo => todo.id !== id))
  }

  return (
    <div>
      <div className="App-title">ToDo App</div>
      <form onSubmit={createToDo}>
        <div className="App-input-bar">
        <input className="App-input" value={task} onChange={onInputChange}></input>
        <button type="submit" className="App-button">{<FaPlus/>}</button>
        </div>
      </form>

      <div className="App-container"> 
        {todos.map((todo, index) => {
          return <div className="App-todo-item" key={todo.id}>
            <div className="App-todo-title">{todo.task}</div>
            <button  className="App-button" onClick={()=> deleteTodo(todo.id)}><FaRegTrashAlt/></button>
          </div>;
        })}
      </div>
    </div>
  );
}

export default App;

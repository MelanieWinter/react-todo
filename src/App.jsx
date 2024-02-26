import './App.css';
import { useState } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

function App() {
  const [todoItems, setTodoItems] = useState([
    { id: 1, content: 'Make a todo app'},
    { id: 2, content: 'Tell me all about it'},
  ]);

  const addTodo = (newTodo) => {
    setTodoItems([...todoItems, { id: todoItems.length + 1, content: newTodo }]);
  };

  return (
    <>
      <h1>To-Do List</h1>
      <TodoList todoItems={todoItems} />
      <TodoForm addTodo={addTodo} />
    </>
  )
}

export default App;

import React, {useState, } from 'react'
import Header from './components/Header';
import Form from './components/Form';
import TodoList from './components/TodoList';
import './App.css'

const App = () => {

  const initialState = JSON.parse(localStorage.getItem("todos")) || [];
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([initialState]);
  const [editTodo, setEditTodo] = useState(null);
  return (<div className='container'>
    <div className='app-wrapper'>
      <div>
        <Header />
        <Form
          input={input}
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}
          editTodo={editTodo}
          setEditTodo={setEditTodo}
        />
        <TodoList
          todos={todos}
          setTodos={setTodos}
          setEditTodo={setEditTodo} />
      </div>
   </div>
  </div>);
}

export default App

import React, { useEffect } from "react";
import { v4 as uudv4 } from "uuid";

const Form = ({ input, setInput, todos, setTodos, editTodo, setEditTodo }) => {
  const updateTodo = (title, id, completed) => {
    const newTodo = todos.map((todo) =>
      todo.id === id ? { title, id, completed } : todo
    );
    setTodos(newTodo);
    setEditTodo("");
  };
  useEffect(() => {
    if (editTodo) {
      setEditTodo(editTodo.title);
    } else {
      setInput("");
    }
  }, [setInput, editTodo]);

  const onInputChange = (e) => {
    setInput(e.target.value);
  };
  const onFormSubmit = (event) => {
    event.preventDefault();
    if (!editTodo) {
      setTodos([...todos, { id: uudv4(), title: input, complete: false }]);
      setInput("");
    } else {
      updateTodo(input, editTodo.id, editTodo.completed);
    }
  };
  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="Enter a Todo..."
        className="task-input"
        value={input}
        required
        onChange={onInputChange}
      />

      <button className="button-add" type="submit">
        {editTodo ? "OK" : "Add"}
      </button>
    </form>
  );
};
export default Form;

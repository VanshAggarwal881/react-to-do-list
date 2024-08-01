import React, { useState } from 'react';

function TodoForm({ addTodo }) {
  const [input, setInput] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    addTodo({
      id: Math.floor(Math.random() * 10000),
      text: input,
      description,
      date,
      isComplete: false
    });

    setInput('');
    setDescription('');
    setDate('');
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a todo"
        value={input}
        name="text"
        className="todo-input"
        onChange={(e) => setInput(e.target.value)}
      />
      <input
        type="text"
        placeholder="Add a description"
        value={description}
        name="description"
        className="todo-input"
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="date"
        value={date}
        name="date"
        className="todo-input"
        onChange={(e) => setDate(e.target.value)}
      />
      <button className="todo-button">Add todo</button>
    </form>
  );
}

export default TodoForm;

import React from 'react';
import './Todo.css';

const Todo = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <input
          onChange={() => toggleComplete(todo)}
          type='checkbox'
          checked={todo.completed ? 'checked' : ''}
        />
        <p
          onClick={() => toggleComplete(todo)}
          className='todo-text'
        >
          {todo.text}
        </p>
      </div>
      <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>Delete</button>
    </div>
  );
};

export default Todo;

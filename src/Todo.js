import React from 'react';
import './App.css';

export function Todo({ todo, index, completeTodo, removeTodo }) {
    return (
      <div className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
      >
        {todo.text}
        <div>
          <button className="button" onClick={() => completeTodo(index)}>Complete</button>
          &nbsp;
          <button className="button" onClick={() => removeTodo(index)}>x</button>
        </div>
      </div>
    );
  };
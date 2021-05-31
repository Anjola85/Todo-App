// functional component
import React from "react";
import "./Todo.css";

const Todos = ({ todos, deleteTodo }) => {
  // conditionial statement to populate App
  const todoList = todos.length ? (
    todos.map((todo) => {
      return (
        <div className="collection-item" key={todo.id}>
          <span>{todo.content}</span>
          <button
            id="mybtn"
            onClick={() => {
              deleteTodo(todo.id);
            }}
          >
            DELETE
          </button>
        </div>
      );
    })
  ) : (
    <p className="center">You have no todo's left bruv!</p>
  );
  return <div className="todos collection">{todoList}</div>;
};

export default Todos;

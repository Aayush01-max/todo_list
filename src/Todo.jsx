import React, { useState } from "react";
import "./todo.css";

function Todo() {
  const [inputval, setinputval] = useState("");
  const [todo, settodo] = useState([]);

  function create() {
    if (inputval.trim() === "") {
      return;
    }
    settodo((todo) => {
      const updatedtodo = [...todo, inputval];
      return updatedtodo;
    });
    setinputval("");
  }

  function Delete(i) {
    const newarr = [...todo];
    newarr.splice(i, 1);
    settodo(newarr);
  }

  function edit(i) {
    if (inputval.trim() === "") {
      return;
    }
    const edited = [...todo];
    edited[i] = inputval;
    settodo(edited);
    setinputval("");
  }

  return (
    <div className="todo-container top-28 fixed left-1/3">
      <input
        className="todo-input"
        value={inputval}
        placeholder="add task..."
        type="text"
        onChange={(e) => setinputval(e.target.value)}
      />{" "}
      <br />
      <button className="todo-button create-button" onClick={create}>
        Add
      </button>
      <div>
        {todo.map((data, i) => {
          return (
            <div className="todo-list-item" key={i}>
              {data}{" "}
              <button
                className="todo-button delete-button"
                onClick={() => Delete(i)}
              >
                Delete <i class="fa-solid fa-trash"></i>
              </button>
              <button
                className="todo-button edit-button"
                onClick={() => edit(i)}
              >
                Edit <i class="fa-regular fa-pen-to-square"></i>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Todo;

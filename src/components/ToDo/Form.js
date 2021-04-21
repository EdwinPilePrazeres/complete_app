import React, { useState } from "react";
import { FaPlusSquare } from "react-icons/fa";

const Form = ({ setInputText, todos, setTodos, inputText, setStatus }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        text: inputText,
        completed: false,
        id: Math.random() * 1000,
      },
    ]);
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  const [clicked, setClicked] = useState(false);

  const clickHandler = () => {
    setClicked(!clicked);
  };

  return (
    <form className={clicked ? "form active" : "form"}>
      <div
        onClick={clickHandler}
        className={clicked ? "toggle active" : "toggle"}
      ></div>
      <div className="input">
        <input
          placeholder="Enter your Task"
          value={inputText}
          onChange={inputTextHandler}
          type="text"
          className="todo-input"
        />
        <button
          onClick={submitTodoHandler}
          className="todo-button"
          type="submit"
        >
          <FaPlusSquare />
        </button>
      </div>

      {/* <div className="select">
        <h2>Show Tasks</h2>
        <div className="radio_buttons">
          <label className="container">
            All
            <input value='all' type="radio" name="radio" />
            <span className="checkmark"></span>
          </label>
          <label className="container">
            Completed
            <input type="radio" name="radio" value='completed' />
            <span className="checkmark"></span>
          </label>
          <label className="container">
            Uncompleted
            <input value='uncompleted'  type="radio" name="radio" />
            <span className="checkmark"></span>
          </label>
        </div>
      </div> */}
    </form>
  );
};

export default Form;

import React from "react";
import { BiCheckboxChecked, BiCheckbox } from "react-icons/bi";
import { BsTrash2Fill } from "react-icons/bs";


const Todo = ({ text, todo, todos, setTodos }) => {

  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };
  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        <div className='content' onClick={completeHandler}>
          {todo.completed ? <BiCheckboxChecked /> : <BiCheckbox />}
          {text}
        </div>
        <BsTrash2Fill className="trash" onClick={deleteHandler} />
      </li>
    </div>
  );
};

export default Todo;

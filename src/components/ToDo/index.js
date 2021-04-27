import React, { useEffect, useState } from "react";
import Form from "./Form";
import ToDoList from "./ToDoList";
// import Navbar from '../Navbar'
import "./index.css";
import './Todo.css'
import './Form.css'
import Navigation from "../Navigation/Navigation";

export const tasksData = [
  {
    id: 1,
    text: "Take the garbage out",
    completed: true
  },
  {
    id: 2,
    text: "Defrost the chicken",
    completed: false
  },
  {
    id: 3,
    text: 'Finish "Complete_app"',
    completed: false
  },
  {
    id: 4,
    text: "Watch Dr.Stone",
    completed: false
  },
  {
    id: 5,
    text: "Read Dragon Ball Manga",
    completed: true
  },
  {
    id: 6,
    text: "Finish market task",
    completed: false
  },
  {
    id: 7,
    text: "Watch Marvel Series",
    completed: false
  }
];

const ToDo = () => {
  
  
  // state stuff
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState(tasksData);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  // run once
  useEffect(() => {
    getLocalTodos();
  }, []);

  // useEffect
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  // functions
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "incompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  // saving it locally
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      const todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };

  return (
    <>
    <Navigation />
    <div className="ToDo">
        {/* <Navbar /> */}
        {/* <div className='circle'></div> */}
        <h2>Tasks</h2>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setStatus={setStatus}
      />

      <ToDoList
        setTodos={setTodos}
        todos={todos}
        filteredTodos={filteredTodos}
      />
    </div>
    </>
  );
};

export default ToDo;

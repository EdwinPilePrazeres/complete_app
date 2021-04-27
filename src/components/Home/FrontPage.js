import React, {useEffect, useState} from "react";
import { FaBars, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./FrontPage.css";
import CardsContainer from "./CardsContainer";
import avatar from "../images/avatar_mask.png";
import Navigation from "../Navigation/Navigation";
import NoteTable from "../Notes/NoteTable";
import { notesData } from "../Notes/NotePad";
import { tasksData } from "../ToDo/index";
import Todo from "../ToDo/Todo";

const FrontPage = () => {
  const [notes, setNotes] = useState(notesData);
  const [todos, setTodos] = useState(tasksData);

  const [toggle, setToggle] = useState(false);
  const toggleMenu = () => {
    setToggle(!toggle);
  };

  // run once
  useEffect(() => {
    getLocalNotes();
    getLocalTodos();
  }, []);

  // useEffect
  useEffect(() => {
    saveLocalNotes();
    saveLocalTodos();
  }, [notes, todos]);

  // saving it locally
  const saveLocalNotes = () => {
    localStorage.setItem("notes", JSON.stringify(notes));
  };
  // saving it locally
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocalNotes = () => {
    if (localStorage.getItem("notes") === null) {
      localStorage.setItem("notes", JSON.stringify([]));
    } else {
      const notesLocal = JSON.parse(localStorage.getItem("notes"));
      setNotes(notesLocal);
    }
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
    <div className="Home_container">
      <Navigation toggle={toggle} />

      <div className={toggle ? "main active" : "main"}>
        <div className="topbar">
          <div
            className={toggle ? "toggle active" : "toggle"}
            onClick={toggleMenu}
          >
            <FaBars className={toggle ? "bars active" : "bars"} />
          </div>
          <div className="search">
            <label>
              <input type="text" placeholder="Search Here" />
              <FaSearch className="search_icon" />
            </label>
          </div>
          <div className="user">
            <img src={avatar} alt="Use Mask" />
          </div>
        </div>

        <CardsContainer />

        <div className="details">
          <div className="recentTasks">
            <div className="cardHeader">
              <h2>Recent Tasks</h2>
              <Link to="/complete_app/tasks">View All</Link>
            </div>

            {todos.map((todo) => (
              <Todo
                setTodos={setTodos}
                todos={todos}
                text={todo.text}
                todo={todo}
                key={todo.id}
              />
            ))}
          </div>

          <div className="recentNotes">
            <div className="cardHeader">
              <h2>Recent Notes</h2>
              <Link to="/complete_app/notes">View All</Link>
            </div>
            <NoteTable notes={notes} key={notes.id}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrontPage;

import React from "react";
import { BiCalendarExclamation, BiTask } from "react-icons/bi";
import {
  FaBars,
  FaChessPawn,
  FaNotesMedical,
  FaSearch,
  FaUser,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./FrontPage.css";
import CardsContainer from "./Home/CardsContainer";
import avatar from "./images/avatar_mask.png";

const FrontPage = () => {
  const [toggle, setToggle] = React.useState(false);
  const toggleMenu = () => {
    setToggle(!toggle);
  };

  return (
    <div className="Home_container">
      <div className={toggle ? "navigation active" : "navigation"}>
        <ul>
          <li>
            <Link to="/complete_app">
              <span className="icon">
                <FaChessPawn />
              </span>
              <span className="title">
                <h2>Brand Name</h2>
              </span>
            </Link>
          </li>
          <li>
            <Link to="/complete_app">
              <span className="icon">
                <FaUser />
              </span>
              <span className="title">DashBoard</span>
            </Link>
          </li>
          <li>
            <Link to="/complete_app/notes">
              <span className="icon">
                <FaNotesMedical />
              </span>
              <span className="title">Notes</span>
            </Link>
          </li>
          <li>
            <Link to="/complete_app/tasks">
              <span className="icon">
                <BiTask />
              </span>
              <span className="title">Tasks</span>
            </Link>
          </li>
          <li>
            <Link to="/complete_app/calendar">
              <span className="icon">
                <BiCalendarExclamation />
              </span>
              <span className="title">Calendar</span>
            </Link>
          </li>
        </ul>
      </div>

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
            <table>
              <thead>
                <tr>
                  <td>Tasks</td>
                  <td>Status</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Take the garbage out</td>
                  <td><span className='status completed'>Completed</span></td>
                </tr>
                <tr>
                  <td>Defrost the chicken</td>
                  <td ><span className='status uncompleted'>Uncompleted</span></td>
                </tr>
                <tr>
                  <td>Finish "Complete_app"</td>
                  <td><span  className='status inprogress'>In Progress</span></td>
                </tr>
                <tr>
                  <td>Watch Dr.Stone</td>
                  <td><span className='status inprogress'>In Progress</span></td>
                </tr>
                <tr>
                  <td>Read Dragon Ball Manga</td>
                  <td><span className='status completed'>Completed</span></td>
                </tr>
                <tr>
                  <td>Finish market task</td>
                  <td><span className='status inprogress'>In Progress</span></td>
                </tr>
                <tr>
                  <td>Watch Marvel Series</td>
                  <td><span className='status uncompleted'>Uncompleted</span></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="recentNotes">
            <div className="cardHeader">
              <h2>Recent Notes</h2>
              <Link to="/complete_app/notes">View All</Link>
            </div>
            <table>
              <thead>
                <tr>
                  <td>Title</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Want to save something?</td>
                </tr>
                <tr>
                  <td>The save is Local, ...</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrontPage;

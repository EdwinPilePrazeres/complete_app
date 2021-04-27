import React from 'react'
import { BiCalendarExclamation, BiTask } from 'react-icons/bi'
import { FaChessPawn, FaNotesMedical, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './Navigation.css'

const Navigation = ({toggle}) => {
    return (
        <div className={toggle ? "navigation active" : "navigation"}>
        <ul>
          <li>
            <Link to="/complete_app">
              <span className="icon">
                <FaChessPawn />
              </span>
              <span className="title">
                <h2>Complete App</h2>
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
    )
}

export default Navigation

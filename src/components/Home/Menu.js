import React from "react";
import {AiOutlineHome} from 'react-icons/ai'
import {FaCalendarAlt} from 'react-icons/fa'
import {BsQuestionCircle} from 'react-icons/bs'
import './Menu.css'
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <section className="menu">
      <Link to='/complete_app' className="buttons">
        <AiOutlineHome />
      </Link>
      <Link to='/complete_app/calendar' className="buttons">
        <FaCalendarAlt />
      </Link>
      <Link to='/complete_app' className="buttons">
        <BsQuestionCircle />
      </Link>
    </section>
  );
};

export default Menu;

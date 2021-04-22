import React from "react";
import {AiOutlineHome} from 'react-icons/ai'
import {FaCalendarAlt} from 'react-icons/fa'
import { MdSpeakerNotes } from 'react-icons/md';
import './Menu.css'
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <section className="menu">
      <Link to='/complete_app' className="buttons_menu">
        <AiOutlineHome />
      </Link>
      <Link to='/complete_app/calendar' className="buttons_menu">
        <FaCalendarAlt />
      </Link>
      <Link to='/complete_app/notes' className="buttons_menu">
        <MdSpeakerNotes />
      </Link>
    </section>
  );
};

export default Menu;

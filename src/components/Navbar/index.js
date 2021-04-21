import React, { useState } from "react";
import { AiOutlineClose, AiOutlineHome } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import "./index.css";
const Navbar = () => {
  const [active, setActive] = useState(false);

  const activeMenu = () => {
    setActive(!active);
  };

  return (
    <div className={active ? "navbar active" : "navbar"}>
      <div className={active ? "toggle active" : "toggle"} onClick={activeMenu}>
        {active ? <AiOutlineClose /> : <GiHamburgerMenu />}
      </div>
      <ul>
        <li>
          <Link to='/complete_app'>
            <AiOutlineHome className='icons'/>
            Home
          </Link>
        </li>
        <li>Calendar</li>
        <li>Tasks</li>
      </ul>
    </div>
  );
};

export default Navbar;

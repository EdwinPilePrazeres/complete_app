import React from "react";
import './CardsContainer.css';
import { FcAlarmClock, FcCalendar, FcParallelTasks } from 'react-icons/fc';
import { MdSpeakerNotes } from 'react-icons/md';
import { Link } from "react-router-dom";




const CardsContainer = () => {
  return (
    <section className="content">
      <div className="cards_container">
        <div className="cards disable">
          <h2>Alarm</h2>
          <FcAlarmClock className='icons'/>
        </div>
        <Link to='/complete_app/notes' className="cards">
          <h2>Notes</h2>
          <MdSpeakerNotes className='icons' />
        </Link>
        <Link to='/complete_app/tasks' className="cards">
          <h2>Tasks</h2>
          <FcParallelTasks className='icons' />
        </Link>
        <Link to='/complete_app/calendar' className="cards">
          <h2>Calendar</h2>
          <FcCalendar className='icons' />
        </Link>
      </div>
    </section>
  );
};

export default CardsContainer;

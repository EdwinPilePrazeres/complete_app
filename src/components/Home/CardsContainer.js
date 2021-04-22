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
          <FcAlarmClock className='icons'/>
          <h2>Alarm</h2>
        </div>
        <Link to='/complete_app/notes' className="cards">
          <MdSpeakerNotes className='icons' />
          <h2>Notes</h2>
        </Link>
        <Link to='/complete_app/tasks' className="cards">
          <FcParallelTasks className='icons' />
          <h2>Tasks</h2>
        </Link>
        <Link to='/complete_app/calendar' className="cards">
          <FcCalendar className='icons' />
          <h2>Calendar</h2>
        </Link>
      </div>
    </section>
  );
};

export default CardsContainer;

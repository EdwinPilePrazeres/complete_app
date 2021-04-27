import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Navigation from '../Navigation/Navigation';
import './Calendar_Page.css'

const Calendar_Page = () => {
  const [value, onChange] = useState(new Date());

  return (
    <>
    <Navigation />
    <div className='Calendar_container'>
      <Calendar
        onChange={onChange}
        value={value}
      />
    </div>
    </>
  );
}

export default Calendar_Page
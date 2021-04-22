import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Menu from '../Home/Menu';
import './Calendar_Page.css'

const Calendar_Page = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div className='Calendar_container'>
      <div className='circle'></div>
      <Calendar
        onChange={onChange}
        value={value}
      />
      <Menu />
    </div>
  );
}

export default Calendar_Page
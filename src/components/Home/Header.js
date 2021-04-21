import React from "react";
import "./Header.css";
import Tasks from "../images/tasks.jpg";
import Calendar from "../images/calendar.jpg";
import Alarm from "../images/alarm.jpg";
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Header = () => {
  return (
    <section className="header">
      <h2>Hello Edwin</h2>
      <Swiper
      spaceBetween={0}
      slidesPerView={1}
      pagination={{ clickable: true }}
    >
      <SwiperSlide><img src={Tasks} /></SwiperSlide>
      <SwiperSlide><img src={Calendar} /></SwiperSlide>
      <SwiperSlide><img src={Alarm} /></SwiperSlide>
      
    </Swiper>
    </section>
  );
};

export default Header;

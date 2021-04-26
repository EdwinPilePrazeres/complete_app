import React from 'react'
import './Home.css';
import CardsContainer from './CardsContainer';
import Header from './Header';
import Menu from './Menu';

const Home = () => {
    return (
        <div className='big_container'>
            {/* <div className='circle'></div> */}
            <Header />
            <CardsContainer />
            <Menu />
        </div>
    )
}

export default Home

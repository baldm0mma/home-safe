import React from 'react';
import Gauge from '../Gauge/Gauge';
import { NavLink } from 'react-router-dom';
import './Header.scss';

export const Header = () => {
  return (
    <header>
      <NavLink to='/' className='home-link'>
        <section className='title-container'>
          <h1>Home Safe</h1>
          <p className='tagline'>Your safety is our #1 concern</p>
        </section>
      </NavLink>
      <div className='header-gauge-wrapper'>
        <p className='progress-text'>Safety Progress</p>
        <Gauge />
      </div>
    </header>
  );
};

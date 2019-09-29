import React from 'react';
import Gauge from '../Gauge/Gauge';
import './Header.scss';

export const Header = () => {
  return (
    <header>
      <section className='title-container'>
        <h1>Home Safe</h1>
        <p className='tagline'>Your safety is our #1 concern</p>
      </section>
      <div className='header-gauge-wrapper'>
        <p className='progress-text'>Safety Progress</p>
        <Gauge />
      </div>
    </header>
  );
};

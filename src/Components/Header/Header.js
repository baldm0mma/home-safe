import React from 'react';
import Gauge from "../Gauge/Gauge";
import "./Header.scss";

export const Header = () => {
  return (
    <header>
      <h1>Home Safe</h1>
      <div className="header-gauge-wrapper">
        <p className="progress-text">Safety Progress</p>
        <Gauge />
      </div>
    </header>
  );
}
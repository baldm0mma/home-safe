import React from 'react';
import Gauge from "../Gauge/Gauge";
import "./Header.scss";

export const Header = () => {
  return (
    <header>
      <h1>Home Safe</h1>
      <Gauge />
    </header>
  )
}
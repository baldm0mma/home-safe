import React from 'react';

import { NavLink } from 'react-router-dom';
import './NavBar.scss';

export const NavBar = () => {
  return (
    <header className="nav-container">
      <nav className="header_nav">
        <NavLink className="header_nav-link" exact to="/summary">
          HOME READINESS
        </NavLink>
        <NavLink className="header_nav-link" exact to="/checklist">
          HOME READINESS CHECKLIST
        </NavLink>
        <NavLink className="header_nav-link" exact to="/plan">
          PRE-INCIDENT CHECKLIST
        </NavLink>
        <NavLink className="header_nav-link" exact to="/scan-upload">
          UPLOAD 3D FLOOR PLANS
        </NavLink>
        <NavLink className="header_nav-link" exact to="/responderPlan">
          FIRST RESPONDER ACTION PLAN
        </NavLink>
      </nav>
    </header>
  );
};

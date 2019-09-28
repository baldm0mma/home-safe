import React from 'react';
import { Route } from 'react-router-dom';
import { Header } from '../../Components/Header/Header';
import { LoginScreen } from '../../Components/LoginScreen/LoginScreen';
import { ChecklistScreen } from '../ChecklistScreen/ChecklistScreen';
import './App.css';

export const App = () => {
  return (
    <main>
      <Header></Header>
      <Route exact path="/" component={LoginScreen}></Route>
      <Route exact path="/checklist" component={ChecklistScreen}></Route>g
    </main>
  );
};
import React from 'react';
import { Route } from 'react-router-dom';
import { Header } from './Header';
import { LoginScreen } from './LoginScreen';
import './App.css';

export const App = () => {
  return (
    <main>
      <Header></Header>
      <Route exact path='/' component={LoginScreen}></Route>
    </main>
  );
};

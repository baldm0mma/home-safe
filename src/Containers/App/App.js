import React from 'react';
import { Route } from 'react-router-dom';
import { Header } from '../../Components/Header/Header';
import { LoginScreen } from '../../Components/LoginScreen/LoginScreen';
import ChecklistScreen from '../ChecklistScreen/ChecklistScreen';
import PreIncidentScreen from '../PreIncidentScreen/PreIncidentScreen';
import { Summary } from '../../Components/Summary/Summary';
import ScanPage from '../../Components/ScanPage/ScanPage';
import './App.scss';

export const App = () => {
  return (
    <main className="app-main">
      <Header></Header>
      <Route exact path="/" component={LoginScreen}></Route>
      <Route exact path="/checklist" component={ChecklistScreen}></Route>
      <Route exact path="/plan" component={PreIncidentScreen}></Route>
      <Route exact path="/summary" component={Summary}></Route>
      <Route exact path="/scan-upload" component={ScanPage}></Route>
    </main>
  );
};

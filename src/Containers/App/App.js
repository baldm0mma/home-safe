import React from 'react';
import { Route } from 'react-router-dom';
import { Header } from '../../Components/Header/Header';
import { NavBar } from '../../Components/NavBar/NavBar';
import { LoginScreen } from '../../Components/LoginScreen/LoginScreen';
import ChecklistScreen from '../ChecklistScreen/ChecklistScreen';
import PreIncidentScreen from '../PreIncidentScreen/PreIncidentScreen';
import Summary from '../../Components/Summary/Summary';
import FirstResponderPlan from '../FirstResponderPlan/FirstResponderPlan';
import ScanPage from '../../Components/ScanPage/ScanPage';
import './App.scss';

export const App = () => {
  return (
    <main className="app-main">
      <Header />
      <NavBar />
      <Route exact path="/" component={LoginScreen}></Route>
      <Route exact path="/checklist" component={ChecklistScreen}></Route>
      <Route exact path="/plan" component={PreIncidentScreen}></Route>
      <Route exact path="/summary" component={Summary}></Route>
      <Route exact path="/responderPlan" component={FirstResponderPlan}></Route>
      <Route exact path="/scan-upload" component={ScanPage}></Route>
    </main>
  );
};

import React from 'react';
import { connect } from 'react-redux';
import { userFamily } from '../../utilz/mockAccountData';
import './FirstResponderPlan.scss';

export const FirstResponderPlan = ({ details }) => {
  const displayPeople = () => {
    return userFamily.people.map(el => (
      <li key={el.id}>{`${el.name}: ${el.type}`}</li>
    ));
  };
  const displayPets = () => {
    return userFamily.pets.map(el => (
      <li key={el.id}>{`${el.name}: ${el.type}`}</li>
    ));
  };
  const displayAreaDetails = () => {
    const result = [];
    for (let i = 0; i < 3; i++) {
      result.push(
        <li>
          <p className="plan-answers-question">{details[i].question}</p>
          {details[i].answer.toString() && <p className="plan-answers-number">{details[i].answer}</p>}
          {details[i].answer === true && <p className="plan-answers-positive">Yes</p>}
          {details[i].answer === false && <p className="plan-answers-negative">No</p>}
        </li>
      );
    }
    return result;
  };
  const displayBuildingDetails = () => {
    const result = [];
    for (let i = 3; i < 12; i++) {
      result.push(
        <li>
          <p className="plan-answers-question">{details[i].question}</p>
          {typeof details[i].answer === "string" && (
            <p className="plan-answers-number">{details[i].answer}</p>
          )}
          {details[i].answer === true && (
            <p className="plan-answers-positive">Yes</p>
          )}
          {details[i].answer === false && (
            <p className="plan-answers-negative">No</p>
          )}
          {typeof details[i].answer === "object" && (
            <p className="plan-answers-positive">{details[i].answer.join(", ")}</p>
          )}
        </li>
      );
    }
    return result;
  };
  return (
    <section className="plan-container">
      <h1 className="plan-title">
        <span>Home Safe's </span>First Responder Action Plan
      </h1>
      <div className="resident-container">
        <h3>Resident Details</h3>
        <div className="people-pets">
          <div className="people">
            <h5>People</h5>
            <ul>{displayPeople()}</ul>
          </div>
          <div className="pets">
            <h5>Pets</h5>
            <ul>{displayPets()}</ul>
          </div>
        </div>
      </div>
      <div className="floorPlan-container">
        <h3>Floor Plans</h3>
        <article className="floorPlans">
          <img src={require('../../assets/FloorPlanLayout.png')} />
        </article>
      </div>
      <div className="details-container">
        <div className="buildingDetails-container">
          <h3>Building Details</h3>
          <ul>{displayBuildingDetails()}</ul>
        </div>
        <div className="areaDetails-container">
          <h3>Area Details</h3>
          <ul>{displayAreaDetails()}</ul>
        </div>
      </div>
    </section>
  );
};

export const mapStateToProps = state => ({
  details: state.preIncidentQuestions
});

export default connect(mapStateToProps)(FirstResponderPlan);

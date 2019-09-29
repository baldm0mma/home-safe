import React, { Component } from 'react';
import { SummaryBranch } from '../../Containers/SummaryBranch/SummaryBranch';
import './Summary.scss';

export class Summary extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="summary-board">
        <h1>Summary</h1>
        <SummaryBranch category="checklist" />
        <SummaryBranch category="preIncident" />
        <SummaryBranch category="floorPlan" />
        {/* <SummaryFo0ter /> */}
      </div>
    );
  }
}

const mapStateToProps = store => ({
  progress: store.progress,
  checklist: store.checklist,
  preIncidentQuestions: store.preIncidentQuestions
}); 

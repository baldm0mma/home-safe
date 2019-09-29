import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SummaryBranch } from '../../Containers/SummaryBranch/SummaryBranch';
import './Summary.scss';

export class Summary extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    console.log(this.props);
  };

  calculateChecklistProgress = () => {
    const { checklist } = this.props;
    let counter = 0;
    checklist.forEach(item => {
      if (item.checked) {
        counter++;
      } else {
        counter += 0;
      }
    });
    return Math.floor((counter / checklist.length) * 100);
  };

  calculateIncidentProgress = () => {
    const { preIncidentQuestions } = this.props;
    let counter = 0;
    preIncidentQuestions.forEach(item => {
      if (item.completed) {
        counter++;
      } else {
        counter += 0;
  }
    });
    return Math.floor((counter / preIncidentQuestions.length) * 100);
  };

  verifyUpload = () => {
    const { uploadCounter } = this.props;
    return uploadCounter > 0 ? 100 : 0;
  };

  render() {
    return (
      <div className="summary-board">
        {/* <h2>Summary</h2> */}
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

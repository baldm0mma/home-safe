import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateProgress } from '../../Actions';
import { SummaryBranch } from '../../Containers/SummaryBranch/SummaryBranch';
import './Summary.scss';

export class Summary extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    this.updateProgressTracker();
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

  updateProgressTracker = () => {
    const checklistProg = this.calculateChecklistProgress();
    const incidentProg = this.calculateIncidentProgress();
    const modelProg = this.verifyUpload();
    const total = checklistProg + incidentProg + modelProg;
    const progress = Math.floor((total / 300) * 100);
    this.props.updateProgress(progress);
  };

  render() {
    return (
      <div className="summary-board">
        {/* <h2>Summary</h2> */}
        <SummaryBranch
          category="checklist"
          data={this.calculateChecklistProgress()}
        />
        <SummaryBranch
          category="preIncident"
          data={this.calculateIncidentProgress()}
        />
        <SummaryBranch category="floorPlan" data={this.verifyUpload()} />
        {/* <SummaryFo0ter /> */}
      </div>
    );
  }
}

const mapStateToProps = store => ({
  progress: store.progress,
  checklist: store.checklist,
  preIncidentQuestions: store.preIncidentQuestions,
  uploadCounter: store.uploadCounter
});

export const mapDispatchToProps = dispatch =>
  bindActionCreators({ updateProgress }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Summary);

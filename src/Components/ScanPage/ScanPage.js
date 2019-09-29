import React, { Component } from 'react';
import ScanUploader from '../ScanUploader/ScanUploader';
import { updateCounter, updateProgress } from '../../Actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './ScanPage.scss';

class ScanPage extends Component {
  state = {
    submitted: false
  };

  componentDidUpdate = () => {
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

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ submitted: true });
    this.props.updateCounter(1);
    this.updateProgressTracker();
  };

  render() {
    return (
      <section className="scan-page-section">
        {this.state.submitted === false && (
          <ScanUploader handleSubmit={this.handleSubmit} />
        )}
        {this.state.submitted === true && (
          <div className="uploaded-notification">
            <img
              src={require('../../assets/checkmark.png')}
              alt="green check mark"
            />
            <p>Scan has been uploaded</p>
          </div>
        )}
      </section>
    );
  }
}

export const mapStateToProps = state => ({
  checklist: state.checklist,
  preIncidentQuestions: state.preIncidentQuestions,
  uploadCounter: state.uploadCounter,
  progress: state.progress
});

// const mapDispatchToProps = dispatch => ({
//   updateCounter: count => dispatch(updateCounter(count))
// });

export const mapDispatchToProps = dispatch =>
  bindActionCreators({ updateProgress, updateCounter }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScanPage);

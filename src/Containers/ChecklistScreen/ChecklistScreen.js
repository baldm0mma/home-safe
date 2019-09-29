import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateProgress } from '../../Actions';
import './ChecklistScreen.scss';
import ChecklistItem from '../ChecklistItem/ChecklistItem';

export class ChecklistScreen extends React.Component {
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

  displayChecklist = () => {
    return this.props.checklist.map(item => {
      return (
        <ChecklistItem
          key={item.id}
          id={item.id}
          text={item.text}
          category={item.category}
          checked={item.checked}
          update={this.updateProgressTracker}
        />
      );
    });
  };

  render() {
    return (
      <main className="checklist-screen">
        <section className="checklist-wrapper">
          {this.props.checklist && this.displayChecklist()}
        </section>
      </main>
    );
  }
}

export const mapStateToProps = state => ({
  checklist: state.checklist,
  preIncidentQuestions: state.preIncidentQuestions,
  uploadCounter: state.uploadCounter,
  progress: state.progress
});

export const mapDispatchToProps = dispatch =>
  bindActionCreators({ updateProgress }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChecklistScreen);

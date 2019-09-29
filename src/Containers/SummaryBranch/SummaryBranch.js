import React from 'react';
import './SummaryBranch.scss';
import { checklistText, preIncidentText, uploadScanText } from './Descriptions';

export const SummaryBranch = props => {
  switch (props.category) {
    case 'checklist':
      return (
        <div className="summary-branch">
          <img
            className="branch-icon"
            src={require('../../assets/_checklistIcon.png')}
          />
          <p className="branch-description">{checklistText}</p>
          <p className="branch-coverage">0%</p>
        </div>
      );
    case 'preIncident':
      return (
        <div className="summary-branch">
          <img
            className="branch-icon"
            src={require('../../assets/_preIncident.png')}
          />
          <p className="branch-description">{preIncidentText}</p>
          <p className="branch-coverage">0%</p>
        </div>
      );
    case 'floorPlan':
      return (
        <div className="summary-branch">
          <img
            className="branch-icon"
            src={require('../../assets/_floorplanIcon.jpg')}
          />
          <p className="branch-description">{uploadScanText}</p>
          <p className="branch-coverage">0%</p>
        </div>
      );
    default:
      return (
        <div className="summary-branch">
          <img className="branch-icon" src="" />
          <p className="branch-description">Example Text Here</p>
          <p className="branch-coverage">0%</p>
        </div>
      );
  }
};

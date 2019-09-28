import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { connect } from 'react-redux';
import "./Gauge.scss";

export const Gauge = props => {
  return (
    <div className="gauge-wrapper">
      <CircularProgressbar
        value={props.progress}
        text={`${props.progress}%`}
        styles={buildStyles({
          pathColor: '#7FFF00',
          textColor: '#f88',
          trailColor: '#d6d6d6',
        })}
      />
    </div>
  )
}

export const mapStateToProps = state => ({
  progress: state.progress
});

export default connect(mapStateToProps)(Gauge);
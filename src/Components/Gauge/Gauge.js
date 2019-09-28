import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export const Gauge = () => {
  const percentage = 95;
  return (
    <div>
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        styles={buildStyles({
          pathColor: '#7FFF00',
          textColor: '#f88',
          trailColor: '#d6d6d6',
        })}
      />
    </div>
  )
}
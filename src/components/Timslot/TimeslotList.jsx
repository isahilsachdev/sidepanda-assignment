import React from 'react';
import './TimeslotList.css';
import TimeslotDiv from './TimeslotDiv';


const TimeslotList = ({ selectedDate, timeslots, onTimeslotSelect }) => {
  
  const options = {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  };
  
  return (
    <div className="timeslot-list">
      <span>{new Date(selectedDate).toLocaleDateString('en-US', options).toUpperCase()} - Available Slots</span>
      <div>
        {timeslots.map((timeslot, index) => (
          <div key={index}>
            <TimeslotDiv timeslot={timeslot} onTimeslotSelect={onTimeslotSelect} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimeslotList;
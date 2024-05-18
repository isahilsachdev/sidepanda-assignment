import React from 'react';
import { useSelector } from 'react-redux';
import TickIcon from '../../icons/TickIcon';

const TimeslotDiv = ({ timeslot, onTimeslotSelect }) => {
  const { selectedSlot } = useSelector((state) => state.calendar);

  const options = {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  };

  const isSelected = JSON.stringify(selectedSlot) === JSON.stringify(timeslot);

  return (
    <div
      className={isSelected ? 'timeslot-bar selected' : 'timeslot-bar'}
      onClick={() => onTimeslotSelect(timeslot)}
    >
      <div>
        <span>
          {new Date(timeslot.start_time).toLocaleTimeString('en-US', options)} - {new Date(timeslot.end_time).toLocaleTimeString('en-US', options)}
        </span>
      </div>
      {isSelected && <div className='icon-div'><TickIcon /></div>}
    </div>
  );
};

export default TimeslotDiv;

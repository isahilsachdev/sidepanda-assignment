import React from 'react';
import './Dropdown.css';

const Dropdown = ({selectedInterval, setselectedInterval}) => {
  const dropdownStyle = {
    color: 'green',
  };

  return (
    <div>
      <select className='dropdown' style={dropdownStyle} defaultValue={selectedInterval} onChange={(e) => setselectedInterval(e.target.value)}>
        <option value="15">15 min</option>
        <option value="30">30 min</option>
        <option value="45">45 min</option>
        <option value="60">60 min</option>
      </select>
    </div>
  );
};

export default Dropdown;

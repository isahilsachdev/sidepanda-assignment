import React from 'react';
import "./EmptyState.css";

const EmptyState = () => {
  return (
    <div className='calendar-empty-state'>
      {/* empty state and error handling */}
      No Slots Available!
    </div>
  )
}

export default EmptyState
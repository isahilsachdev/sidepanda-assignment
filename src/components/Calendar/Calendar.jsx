import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { fetchTimeslots, setLoading, setSelectedSlot, setTimeslots } from '../../redux/actions/calendarActions';
import TimeslotList from '../Timslot/TimeslotList';
import LoadingSpinner from '../Loader/LoadingSpinner';
import './Calendar.css';
import Dropdown from '../Dropdown/Dropdown';
import CalenderFooter from '../Footer/Footer';
import EmptyState from '../EmptyState/EmptyState';

const CalendarComponent = () => {
  const dispatch = useDispatch();
  const { selectedDate, timeslots, original_timeslots, loading, selectedSlot } = useSelector((state) => state.calendar);
  const [selectedInterval, setselectedInterval] = useState(30);

  // fetching time slots on initial load
  useEffect(() => {
    dispatch(fetchTimeslots(selectedDate));
  }, [dispatch, selectedDate]);

  const handleDateChange = (date) => {
    dispatch(fetchTimeslots(date));
  };

  // updating selected time slot
  const handleTimeslotSelect = (slot) => {
    dispatch(setSelectedSlot(slot || {}));
  };

  const splitSlots = (slots, intervalMinutes) => {
    const intervalMillis = intervalMinutes * 60 * 1000;
    const newSlots = [];
    
    // using start_time, end_time and interval to transform as we dont have query parameters in API
    Array.isArray(slots) && slots.forEach(slot => {
      const startTime = new Date(slot.start_time).getTime();
      const endTime = new Date(slot.end_time).getTime();
  
      for (let current = startTime; current < endTime; current += intervalMillis) {
        newSlots.push({
          start_time: new Date(current).toISOString(),
          end_time: new Date(current + intervalMillis).toISOString()
        });
      }
    });
    dispatch(setTimeslots(newSlots || []));
    return newSlots;
  }

  useEffect(() => {
    dispatch(setLoading());
    // using original timeslot to update timeslots based on interval
    splitSlots(original_timeslots, selectedInterval);
  }, [selectedInterval, original_timeslots])
  
  return (
    <>
      <div className="calendar-container">
        <div className='calendar-box'>
          {/* static info */}
          <h2>
            Test Service
          </h2>
          <p><strong>Timezone:</strong>{" "} Asia/Culcutta</p>

          {/* calendar component */}
          <Calendar
            value={selectedDate}
            onChange={handleDateChange}
            className="calendar"
          />
        </div>
        {
          <div className='timeslot-container'>
            <div className='timeslot-duration-container'>
              <span>
                SELECT FROM VARIANTS
              </span>
              <Dropdown selectedInterval={selectedInterval} setselectedInterval={setselectedInterval} />
            </div>
            {loading ? (
              <LoadingSpinner />
            ) : timeslots?.length > 0 ? (
              <TimeslotList selectedDate={selectedDate} timeslots={timeslots} onTimeslotSelect={handleTimeslotSelect} />
            ) : (
              <EmptyState />
            )}
          </div>
        }
      </div>

      {/* footer */}
      <CalenderFooter selectedSlot={selectedSlot} />
    </>
  );
};

export default CalendarComponent;
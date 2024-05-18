import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { fetchTimeslots, setSelectedSlot } from '../../redux/actions/calendarActions';
import TimeslotList from '../Timslot/TimeslotList';
import LoadingSpinner from '../Loader/LoadingSpinner';
import './Calendar.css';
import Dropdown from '../Dropdown/Dropdown';
import CalenderFooter from '../Footer/Footer';

const CalendarComponent = () => {
  const dispatch = useDispatch();
  const { selectedDate, timeslots, loading, selectedSlot } = useSelector((state) => state.calendar);

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
  
  return (
    <div className="main-container">
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
            {
              loading ? (
                <LoadingSpinner />
              ) : (
                <>
                  {
                    timeslots?.length ? (
                      <>
                        <div className='timeslot-duration-container'>
                          <span>
                            SELECT FROM VARIANTS
                          </span>
                          <Dropdown />
                        </div>
                        <TimeslotList selectedDate={selectedDate} timeslots={timeslots} onTimeslotSelect={handleTimeslotSelect} />
                      </>
                    ) : (
                      <div className='calendar-empty-state'>
                        {/* empty state and error handling */}
                        No Slots Available!
                      </div>
                    )
                  }
                </>
              )
            }
          </div>
        }
      </div>

      {/* footer */}
      <CalenderFooter selectedSlot={selectedSlot} />
    </div>
  );
};

export default CalendarComponent;
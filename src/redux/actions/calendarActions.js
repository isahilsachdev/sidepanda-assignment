import { fetchTimeslotsFromAPI } from '../../utils/api';

export const setSelectedDate = (date) => ({
  type: 'SET_SELECTED_DATE',
  payload: date,
});

export const setSelectedSlot = (slot) => ({
  type: 'SET_SELECTED_SLOT',
  payload: slot,
});

export const setTimeslots = (timeslots) => ({
  type: 'SET_TIMESLOTS',
  payload: timeslots,
});

export const setOriginalTimeslots = (timeslots) => ({
  type: 'SET_ORIGINAL_TIMESLOTS',
  payload: timeslots,
});

export const setLoading = () => ({
  type: 'SET_LOADING',
});

export const fetchTimeslots = (date) => {
  return async (dispatch) => {
    dispatch(setSelectedDate(date));

    try {
      // Calculate today's date (startDate)
      const startDate = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
      // Calculate tomorrow's date (endDate)
      const endDate = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 2);
      // Fetch timeslots from the API
      const timeslots = await fetchTimeslotsFromAPI(startDate, endDate);
      dispatch(setTimeslots(timeslots[0]?.slots || []));
      dispatch(setOriginalTimeslots(timeslots[0]?.slots || []));
    } catch (error) {
      console.error('Error fetching timeslots:', error);
    }
  };
};
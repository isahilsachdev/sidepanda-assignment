import { fetchTimeslotsFromAPI } from '../../utils/api';

export const setSelectedDate = (date) => ({
  type: 'SET_SELECTED_DATE',
  payload: date,
});

export const setSelectedSlot = (slot) => ({
  type: 'SET_SELECTED_SLOT',
  payload: slot,
});

export const setMonthSlots = (monthSlots) => ({
  type: 'SET_MONTH_SLOTS',
  payload: monthSlots,
});

export const setTimeslots = (timeslots) => ({
  type: 'SET_TIMESLOTS',
  payload: timeslots,
});

export const setOriginalTimeslots = (timeslots) => ({
  type: 'SET_ORIGINAL_TIMESLOTS',
  payload: timeslots,
});

export const setLoading = (loading) => ({
  type: 'SET_LOADING',
  payload: loading,
});

export const fetchTimeslots = (date) => {
  return async (dispatch, getState) => {
    dispatch(setSelectedDate(date));
    dispatch(setLoading(true));

    const year = date.getFullYear();
    const month = date.getMonth();

    // Check if timeslots for the month are already in the state
    const monthKey = `${year}-${month}`;
    const { monthSlots } = getState().calendar;

    if (monthSlots && monthSlots[monthKey]) {
      // Use cached timeslots
      const cachedTimeslots = monthSlots[monthKey];
      const selectedDateSlots = cachedTimeslots.find(slot => slot.date === date.toISOString().split('T')[0]);
      dispatch(setTimeslots(selectedDateSlots?.slots || []));
      dispatch(setOriginalTimeslots(selectedDateSlots?.slots || []));
      dispatch(setLoading(false));
    } else {
      try {
        // First date of the month
        const startDate = new Date(year, month, 1);
    
        // Last date of the month
        const endDate = new Date(year, month + 1, 2);
        // Fetch timeslots from the API
        const timeslots = await fetchTimeslotsFromAPI(startDate, endDate);

        // Store the fetched timeslots in the state
        dispatch(setMonthSlots({ [monthKey]: timeslots }));

        // Update slots for the selected date
        const selectedDateSlots = timeslots.find(slot => slot.date === date.toISOString().split('T')[0]);
        dispatch(setTimeslots(selectedDateSlots?.slots || []));
        dispatch(setOriginalTimeslots(selectedDateSlots?.slots || []));
      } catch (error) {
        console.error('Error fetching timeslots:', error);
      } finally {
        dispatch(setLoading(false));
      }
    }
  };
};

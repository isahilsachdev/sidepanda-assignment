const initialState = {
  selectedDate: new Date(),
  selectedSlot: {},
  timeslots: [],
  loading: false,
};

const calendarReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SELECTED_DATE':
      return {
        ...state,
        selectedDate: action.payload,
        loading: true,
        selectedSlot: {}
      };
    case 'SET_SELECTED_SLOT':
      return {
        ...state,
        selectedSlot: action.payload,
      };
    case 'SET_TIMESLOTS':
      return {
        ...state,
        timeslots: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default calendarReducer;
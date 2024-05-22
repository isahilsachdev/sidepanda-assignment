const initialState = {
  selectedDate: new Date(),
  selectedSlot: {},
  timeslots: [],
  original_timeslots: [],
  monthSlots: {},
  loading: true,
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
    case 'SET_MONTH_SLOTS':
      return {
        ...state,
        monthSlots: { ...state.monthSlots, ...action.payload },
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
    case 'SET_ORIGINAL_TIMESLOTS':
      return {
        ...state,
        original_timeslots: action.payload,
        loading: false,
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};

export default calendarReducer;
import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';  // Corrected import
import rootReducer from './reducer';

const initialState = {
  calendar: {
    selectedDate: new Date(),
    timeslots: [],
    loading: false,
    selectedSlot: {},
  }
};

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));  // Updated usage of thunk

export default store;

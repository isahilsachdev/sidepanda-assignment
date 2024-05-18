import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import CalendarComponent from './components/Calendar';

const App = () => {
  return (
    <Provider store={store}>
      <CalendarComponent />
    </Provider>
  );
};

export default App;
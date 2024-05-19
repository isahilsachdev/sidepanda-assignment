import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import CalendarComponent from './components/Calendar/Calendar';
import Header from './components/Header/Header';
import "./App.css";

const App = () => {
  return (
    <Provider store={store}>
      {/* header */}
      <Header />
      <div className="main-container">
        <CalendarComponent />
      </div>
    </Provider>
  );
};

export default App;
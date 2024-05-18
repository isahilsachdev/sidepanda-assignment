import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const notifySuccess = (message) => {
  toast.success(message, {
    position: 'top-right',
    autoClose: 2000,
  });
};

export const notifyWarning = (message) => {
  toast.warn(message, {
    position: 'top-right',
    autoClose: 2000,
  });
};

const ToastNotification = () => {
  return <ToastContainer />;
};

export default ToastNotification;

import RightArrow from "../icons/RightArrow";
import "./Footer.css";
import ToastNotification, { notifySuccess, notifyWarning } from './ToastNotification';

const CalenderFooter = ({selectedSlot}) => {
  const options = {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  };

  // booking success 
  const handleFormSubmission = () => {
    notifySuccess(`Your meeting is successfully booked from ${new Date(selectedSlot.start_time).toLocaleTimeString('en-US', options)} to ${new Date(selectedSlot.end_time).toLocaleTimeString('en-US', options)}`);
  };

  // warning because no time slot selected 
  const handleSubmissionWarning = () => {
    notifyWarning('No time slot selected!');
  };


  return (
    <>
      <div className="footer">
        <p>
          POWERED BY{" "}
          <a
            className="link"
            href="https://apps.shopify.com/appointo-appointments-and-bookings"
            target="_blank"
            rel="noreferrer"
          >
            APPOINTO
          </a>
        </p>
        <button className="btn" onClick={Object.keys(selectedSlot)?.length ? handleFormSubmission : handleSubmissionWarning}>
          Next <RightArrow />
        </button>
      </div>
      <ToastNotification />
    </>
  );
};

export default CalenderFooter;
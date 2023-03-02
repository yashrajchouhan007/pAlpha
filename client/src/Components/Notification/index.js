import React from "react";
import "./notification.css";

const Notification = ({ status, variant, message }) => {
  return (
    <>
      {status && status ? (
        <div className={`notification ${variant}`}>
          <p>{message}</p>
        </div>
      ) : null}
    </>
  );
};

export default Notification;

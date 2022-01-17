import React from "react";
import { createRef, useImperativeHandle } from "react";

import "./Notification.css";

const Notification = React.forwardRef((props, ref) => {
  const elementRef = createRef();

  const slideUp = () => {
    elementRef.current.style.top = "-50px";
  };

  const slideDown = (message) => {
    elementRef.current.textContent = message;
    elementRef.current.style.top = "0px";
  };

  useImperativeHandle(ref, () => {
    // return { showNotification };
    return {
      slideDown,
      slideUp,
    };
  });

  return <div ref={elementRef} className="notification"></div>;
});

export default Notification;

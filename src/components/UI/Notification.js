import React from "react";
import { createRef, useImperativeHandle } from "react";

import "./Notification.css";

const Notification = React.forwardRef((props, ref) => {
  const elementRef = createRef();

  const showNotification = (message) => {
    elementRef.current.textContent = message;
    elementRef.current.style.top = "0px";
    setTimeout(() => {
      elementRef.current.style.top = "-50px";
    }, 2000);
  };

  useImperativeHandle(ref, () => {
    return { showNotification };
  });

  return <div ref={elementRef} className="notification"></div>;
});

export default Notification;

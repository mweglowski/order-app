import { React, useRef } from "react";

import "./Notification.css";

export const Notification = React.forwardRef((props, ref) => {
  const elementRef = useRef();

  return (
    <div ref={elementRef} className="notification">
      Default message.
    </div>
  );
});

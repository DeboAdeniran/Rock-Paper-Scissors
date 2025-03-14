import React from "react";
import "../css/notification.css";
function ErrorTab({ error_msg }) {
  return <div className="errortab">{error_msg}</div>;
}
export default ErrorTab;

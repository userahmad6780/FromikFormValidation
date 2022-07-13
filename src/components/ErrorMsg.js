import React from "react";

function ErrorMsg(props) {
  return <div className="text-danger">{props.children}</div>;
}

export default ErrorMsg;

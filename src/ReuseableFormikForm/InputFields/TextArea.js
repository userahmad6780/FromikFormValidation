import { ErrorMessage, Field } from "formik";
import React from "react";
import ErrorMsg from "../../components/ErrorMsg";

function TextArea(props) {
  const { name,placeholder, ...rest } = props;
  return (
    <div>
      <Field  placeHolder={placeholder} className="border_sm" name={name} {...rest} />
      <ErrorMessage name={name} component={ErrorMsg} />
    </div>
  );
}

export default TextArea;

import React from "react";
import Input from "./InputFields/input";
import RadioInput from "./InputFields/RadioInput";
import Select from "./InputFields/Select";
import TextArea from "./InputFields/TextArea";

function FormikControl(props) {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textArea":
      return <TextArea {...rest} />;
    case "select":
      return <Select {...rest} />;
    case "radio":
      return <RadioInput {...rest} />;
    default:
      return null;
  }
}

export default FormikControl;

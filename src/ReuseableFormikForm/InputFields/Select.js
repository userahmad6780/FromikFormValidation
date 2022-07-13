import { ErrorMessage, Field } from "formik";
import React from "react";
import ErrorMsg from "../../components/ErrorMsg";

function Select(props) {
  const { name, options, ...rest } = props;
  return (
    <div>
      <Field as="select" name={name} {...rest}>
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.key}
            </option>
          );
        })}
      </Field>
      <ErrorMessage name={name} component={ErrorMsg} />
    </div>
  );
}

export default Select;

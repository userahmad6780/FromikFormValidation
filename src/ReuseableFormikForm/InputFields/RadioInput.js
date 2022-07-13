import { ErrorMessage, Field } from "formik";
import React from "react";
import ErrorMsg from "../../components/ErrorMsg";

function RadioInput(props) {
  const { name, type, options, ...rest } = props;
  return (
    <div>
      <Field name={name} {...rest}>
        {({ field }) => {
          return options.map((option) => {
            return (
              <div key={option.key}>
                <input
                  name={field.name}
                  id={option.value}
                  type={type}
                  {...field}
                  value={option.value}
                  checked={field.value === option.value}
                />
                <label>{option.key}</label>
              </div>
            );
          });
        }}
      </Field>
      <ErrorMessage name={name} component={ErrorMsg} />
    </div>
  );
}

export default RadioInput;

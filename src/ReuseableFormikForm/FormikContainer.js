import { Formik, Form } from "formik";
import * as Yup from "yup";
import React from "react";
import FormikControl from "./FormikControl";

const optionArray = [
  { key: "Please Select Option", value: "" },
  { key: "option1", value: "option1" },
  { key: "option2", value: "option2" },
];
const radioOptions = [
  { key: "option1", value: "rValue1" },
  { key: "option2", value: "rValue2" },
  { key: "option3", value: "rValue3" },
];
const initialValues = {
  firstName: "",
  description: "",
  selectOption: "",
  radioBtn: "",
};

const validationSchema = Yup.object({
  firstName: Yup.string().required("firstName is required"),
  description: Yup.string().required("please enter description"),
  selectOption: Yup.string().required("please select an option"),
  radioBtn: Yup.string().required("required"),
});

const onSubmit = (values) => {
  console.log("values", values);
};

function FormikContainer() {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form>
            <FormikControl
              placeholder="please enter your name"
              control="input"
              name="firstName"
              type="text"
            />
            <FormikControl
              placeholder="please enter description"
              control="textArea"
              name="description"
            />
            <FormikControl
              control="select"
              name="selectOption"
              options={optionArray}
            />
            <FormikControl
              control="radio"
              name="radioBtn"
              options={radioOptions}
              type="radio"
            />
            <button className="border_sm btn formBtn" type="submit">
              Submit
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default FormikContainer;

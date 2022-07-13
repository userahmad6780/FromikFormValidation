import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import ErrorMsg from "../../components/ErrorMsg";

const initialValues = {
  firstName: "",
  lastName: "",
};
const validationSchema = Yup.object({
  firstName: Yup.string().required("Please enter first name"),
  lastName: Yup.string().required("Please enter last name"),
});
const onSubmit = (values) => {
  console.log("values", values);
};

function FormikForm() {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        console.log("formik props", formik)
        return (
          <Form className="form border_sm m-auto">
            <Field
              name="firstName"
              type="text"
              placeholder="Enter Your Name"
              className="border_sm"
            />
            <ErrorMessage name="firstName" component={ErrorMsg} />
            <Field
              name="lastName"
              type="text"
              placeholder="Enter Your last Name"
              className="border_sm"
            />
            <ErrorMessage name="lastName" component={ErrorMsg} />
            <button className="border_sm btn formBtn" type="submit">
              Submit
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default FormikForm;

import React from "react";
import { useFormik } from "formik";

const initialValues = {
  firstName: "Muhammad",
  lastName: "",
};

const onSubmit = (values) => {
  console.log("formValues", values);
};

const validate = (values) => {
  let errors = {};
  if (!values.firstName) {
    errors.firstName = "please enter your name";
  }
  if (!values.lastName) {
    errors.lastName = "please enter your last name";
  }
  return errors;
};

function NightForm() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });
  return (
    <div>
      <h1>Login Form</h1>
      <form onSubmit={formik.handleSubmit}>
        <input
          name="firstName"
          type="text"
          placeholder="First Name"
          value={formik.values.firstName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.firstName && formik.errors.firstName && (
          <h6 className="text-danger">{formik.errors.firstName}</h6>
        )}
        <input
          name="lastName"
          type="text"
          placeholder="last Name"
          value={formik.values.lastName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.lastName && formik.errors.lastName && (
          <h6 className="text-danger">{formik.errors.lastName}</h6>
        )}
        <button type="submit">Submit Form</button>
      </form>
    </div>
  );
}

export default NightForm;

import { useFormik } from "formik";
import React from "react";
const initialValues = {
  firstName: "",
  lastName: "",
};
const onSubmit = (values) => {
  console.log("values", values);
};

function FormikForm() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate: (values) => {
      let errors = {};
      if (!values.firstName) {
        errors.firstName = "enter first name";
      }
      if (!values.lastName) {
        errors.lastName = "enter last name";
      }
      return errors;
    },
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <input
          name="firstName"
          type="text"
          placeholder="Enter Your Name"
          value={formik.firstName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.errors.firstName &&
          formik.touched.firstName &&
          formik.errors.firstName}
        <input
          name="lastName"
          type="text"
          placeholder="Enter Your last Name"
          value={formik.lastName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.errors.lastName &&
          formik.touched.lastName &&
          formik.errors.lastName}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormikForm;

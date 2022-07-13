import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const initialValues = {
  firstName: "",
  lastName: "",
};
const validationSchema = Yup.object({
  firstName: Yup.string().required("Please enter first name"),
  lastName: Yup.string().required("Please enter last name")
})
const onSubmit = (values) => {
  console.log("values", values);
};


function OldIndex() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema
    // validate: (values) => {
    //   let errors = {};
    //   if (!values.firstName) {
    //     errors.firstName = "enter first name";
    //   }
    //   if (!values.lastName) {
    //     errors.lastName = "enter last name";
    //   }
    //   return errors;
    // },
  });
  return (
      <form className="form border_sm m-auto" onSubmit={formik.handleSubmit}>
        <input
          name="firstName"
          type="text"
          placeholder="Enter Your Name"
          className="border_sm"
          value={formik.firstName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {(formik.errors.firstName &&
          formik.touched.firstName) &&
          <p className="d-block text-danger">{formik.errors.firstName}</p>}
        <input
          name="lastName"
          type="text"
          placeholder="Enter Your last Name"
          className="border_sm"
          value={formik.lastName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {(formik.errors.lastName &&
          formik.touched.lastName) &&
          <p className="d-block text-danger">{formik.errors.lastName}</p>}
        <button className="border_sm btn formBtn" type="submit">Submit</button>
      </form>
  );
}

export default OldIndex;

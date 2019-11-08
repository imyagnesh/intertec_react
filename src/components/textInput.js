import React, { Fragment } from "react";
import { ErrorMessage } from "formik";

const TextInput = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => {
  return (
    <Fragment>
      <input type="text" {...props} {...field} />
      <ErrorMessage name={field.name} />
    </Fragment>
  );
};

export default TextInput;

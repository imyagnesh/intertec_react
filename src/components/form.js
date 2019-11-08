import React from "react";
import { Formik, ErrorMessage, Field, FieldArray, Form } from "formik";

const CommonForm = ({ fields, ...props }) => {
  return (
    <Formik {...props}>
      {({
        values,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        isValid,
        status
      }) => (
        <Form>
          {status && status.serverError && <p>{status.serverError}</p>}
          {fields.map(x => {
            if (x.arrayFields) {
              return (
                <FieldArray
                  name={x.name}
                  key={x.name}
                  render={arrayHelpers => (
                    <div>
                      {values[x.name].map((arr, index) => (
                        <div key={index}>
                          {x.arrayFields.map(arrField => {
                            console.log(`${x.name}[${index}].${arrField.name}`);
                            return (
                              <Field
                                key={arrField.name}
                                {...arrField}
                                name={`${x.name}[${index}].${arrField.name}`}
                              />
                            );
                          })}
                          <button
                            type="button"
                            onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                          >
                            -
                          </button>
                        </div>
                      ))}
                      <button
                        type="button"
                        onClick={() => arrayHelpers.push(x.defaultValue)}
                      >
                        {/* show this when user has removed all friends from the list */}
                        Add a friend
                      </button>
                      <div>
                        <button type="submit">Submit</button>
                      </div>
                    </div>
                  )}
                />
              );
            }
            return <Field key={x.name} {...x} />;
          })}
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default CommonForm;

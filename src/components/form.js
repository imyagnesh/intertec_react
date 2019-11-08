import React from "react";
import { Formik, ErrorMessage, Field, FieldArray } from "formik";

const Form = ({ fields, ...props }) => {
  return (
    <Formik {...props}>
      {({
        values,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        isValid
      }) => (
        <form onSubmit={handleSubmit}>
          {fields.map(x => {
            if (x.arrayFields) {
              return (
                <FieldArray
                  name={x.name}
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
            Login
          </button>
        </form>
      )}
    </Formik>
  );
};

export default Form;

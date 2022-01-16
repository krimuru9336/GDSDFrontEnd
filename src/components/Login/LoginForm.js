import React from "react";
import { Formik } from "formik";
import { initialValues, schemaValidation } from "./schema"


export default function LoginForm({handleFormSubmit, isFormSubmitting}) {
    return (
        <>
<Formik
      initialValues={initialValues}
      validationSchema={schemaValidation}
      onSubmit={(values,) => {
        handleFormSubmit(values)

      }}
    
    >
      {props => {
        const {
          values,
          touched,
          errors,
          dirty,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
          handleReset
        } = props;
        return (
          <form onSubmit={(e)=>{
            e.preventDefault()
            handleSubmit()}}      autoComplete="off">
              <div className="form-outline mb-4">
          
            <input
              id="email"
              placeholder="Enter your email"
              type="text"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                "form-control"
              }
         
            />
            {errors.email && touched.email && (
              <div className="text-danger">{errors.email}</div>
            )}
            </div>
            <div className="form-outline mb-4">
          
            <input
              id="password"
              placeholder="Enter your password"
              type="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                "form-control"
              }
            />
            {errors.password && touched.password && (
              <div className="text-danger">{errors.password}</div>
            )}
            </div>

<div className="common-text-center">
            <button
            className="btn btn-primary btn-sm"
            type="submit" disabled={isFormSubmitting}>
              Login
            </button>
</div>
          </form>
        );
      }}
    </Formik>
        </>
    )
}
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
          
          <br/>
            <p>Pick the Day of the Week</p>
            <select
              id="days_of_the_week"
              placeholder="Enter your days_of_the_week"
              type="text"
              value={values.days_of_the_week}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                "form-control"
              }
         
            >  
              <option value="2">Monday</option>
              <option value="3">Tuesday</option>
              <option value="4">Wednesday</option>
              <option value="4">Thursday</option>
              <option value="4">Friday</option>
              <option value="4">Saturday</option>
              <option value="1">Sunday</option>
            </select>
           
            </div>
            <div className="form-outline mb-4">
          
            <br/>
            <p>Pick the start time</p>
            <input
              id="start_time"
              placeholder="Enter your start_time"
              type="text"
              value={values.start_time}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                "form-control"
              }
            />
           
            </div>

            <div className="form-outline mb-4">
          
            <br/>
            <p>Pick the end time</p>
            <input
                id="end_time"
                placeholder="Enter your end_time"
                type="text"
                value={values.end_time}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                "form-control"
                }
            />
            
            </div>

<div className="common-text-center">
            <button
            className="btn btn-primary btn-sm"
            type="submit" disabled={isFormSubmitting}>
              Save
            </button>
</div>
          </form>
        );
      }}
    </Formik>
        </>
    )
}
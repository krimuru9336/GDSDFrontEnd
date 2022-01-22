import React from "react";
import { Formik } from "formik";
import { initialValues, schemaValidation } from "./schema";

export default function FormComponent({ handleFormSubmit, isFormSubmitting, formData }) {
    console.log("here",formData)
  const roleOptions = [
    {
      label: "Student",
      value: "student",
    },
    {
      label: "Tutor",
      value: "tutor",
    },
  ];
  return (
    <>
      <Formik
        initialValues={formData}
        validationSchema={schemaValidation}
        enableReinitialize
        onSubmit={(values) => {
          handleFormSubmit(values);
        }}
      >
        {(props) => {
          const {
            values,
            touched,
            errors,
            dirty,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
            handleReset,
            setFieldValue
          } = props;
          return (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
              autoComplete="off"
            >
           
  
  <div class="form-group row mb-3">
    <label htmlFor="fname" class="col-sm-2 col-form-label">First Name</label>
    <div class="col-sm-10">
      <input type="text" 
      name="first_name"
       value={values.first_name}
       onChange={handleChange}
       onBlur={handleBlur}
      class="form-control" id="fname" placeholder="First Name" />
    </div>
  {/*   {errors.first_name && touched.first_name && (
                  <div className="text-danger">{errors.first_name}</div>
                )} */}
  </div>
  <div class="form-group row mb-3">
    <label htmlFor="lname" class="col-sm-2 col-form-label">Last Name</label>
    <div class="col-sm-10">
      <input type="text" 
      name="last_name"
       value={values.last_name}
       onChange={handleChange}
       onBlur={handleBlur}
      class="form-control" id="lname" placeholder="Last Name" />
    </div>
  
  </div>
  <div class="form-group row mb-3">
    <label htmlFor="address" class="col-sm-2 col-form-label">Address</label>
    <div class="col-sm-10">
      <input type="text" 
      name="lastaddress"
       value={values.address}
       onChange={handleChange}
       onBlur={handleBlur}
      class="form-control" id="address" placeholder="Address" />
    </div>
  
  </div>
  <div class="form-group row mb-3">
    <label htmlFor="email" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input type="email" 
      name="email"
       value={values.email}
       onChange={handleChange}
       onBlur={handleBlur}
      class="form-control" id="fname" placeholder="Email" />
    </div>
  
  </div>
  <div class="form-group row mb-3">
    <label htmlFor="dob" class="col-sm-2 col-form-label">DOB</label>
    <div class="col-sm-10">
      <input type="date" 
      name="DOB"
       value={values.DOB}
       onChange={handleChange}
       onBlur={handleBlur}
      class="form-control" id="dob" placeholder="DOB" />
    </div>
  
  </div>
  <div class="form-group row mb-3">
    <label htmlFor="phone" class="col-sm-2 col-form-label">Phone</label>
    <div class="col-sm-10">
      <input type="number" 
      name="phone_number"
       value={values.phone_number}
       onChange={handleChange}
       onBlur={handleBlur}
      class="form-control" id="phone" placeholder="Phone" />
    </div>
  
  </div>
 
  <div class="form-group row mb-3">
    <label htmlFor="cv" class="col-sm-2 col-form-label">Upload CV</label>
    <div class="col-sm-10">
      <input type="file" 
      name="cv"
       value={values.cv}
       onChange={handleChange}
       onBlur={handleBlur}
      class="form-control" id="cv" placeholder="Upload CV" />
    </div>
  </div>
</form>

              
             
             
            
           
          
          );
        }}
      </Formik>
    </>
  );
}

import React from "react";
import { Formik } from "formik";
import { initialValues, schemaValidation } from "./schema";



export default function SignupForm({ handleFormSubmit, isFormSubmitting, errorResponseMessage }) {
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

  const ErrorContent = (touched, fieldName) => {
    return errorResponseMessage && touched[fieldName] ? 
    <div className="text-danger">{errorResponseMessage[fieldName]}</div> : ""
   
  }

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={schemaValidation}
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
              <div className="form-outline form-group mb-4">
                <label className="form-label">Sign up as</label>
                <select id="role" name="role"
                  value={values.role}
                  onChange={handleChange}
                className="form-control">
                  {roleOptions.map((item, index) => {
                    return (
                      <option value={item.value} key={index}>
                        {item.label}
                      </option>
                    );
                  })}
                </select>
                {errors.role && touched.role && (
                  <div className="text-danger">{errors.role}</div>
                )}
                
              </div>
              <div className="form-outline mb-4">
                <input
                  id="first_name"
                  placeholder="First Name"
                  type="text"
                  value={values.first_name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={"form-control"}
                />
                {errors.first_name && touched.first_name && (
                  <div className="text-danger">{errors.first_name}</div>
                )}
                {ErrorContent(touched, "first_name")}
              </div>
              <div className="form-outline mb-4">
                <input
                  id="last_name"
                  placeholder="Last Name"
                  type="text"
                  value={values.last_name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={"form-control"}
                />
                {errors.last_name && touched.last_name && (
                  <div className="text-danger">{errors.last_name}</div>
                )}
                {ErrorContent(touched, "last_name")}
              </div>
              <div className="form-outline mb-4">
                <input
                  id="email"
                  placeholder="Enter your email"
                  type="text"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={"form-control"}
                />
                {errors.email && touched.email && (
                  <div className="text-danger">{errors.email}</div>
                )}
              </div>
              {ErrorContent(touched, "email")}
              <div className="form-outline mb-4">
                <input
                  id="address"
                  placeholder="Address"
                  type="text"
                  value={values.address}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={"form-control"}
                />
                {errors.address && touched.address && (
                  <div className="text-danger">{errors.address}</div>
                )}
                {ErrorContent(touched, "address")}
              </div>
              <div className="form-outline mb-4">
                <input
                  id="phone"
                  placeholder="Phone"
                  type="number"
                  value={values.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={"form-control"}
                />
                {errors.phone && touched.phone && (
                  <div className="text-danger">{errors.phone}</div>
                )}
                {ErrorContent(touched, "phone_number")}
              </div>
              <div className="form-outline mb-4">
                <input
                  id="dob"
                  placeholder="DOB"
                  type="date"
                  value={values.dob}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={"form-control"}
                />
                {errors.dob && touched.dob && (
                  <div className="text-danger">{errors.dob}</div>
                )}
                {ErrorContent(touched, "dob")}
              </div>
              
              {values.role === "tutor" &&
              <div className="form-outline mb-4">
              <label htmlFor="cv" className="form-label">CV</label>
                <input
                  id="cv"
                  placeholder="CV"
                  type="file"
                 
                  onChange={(e)=>{
                    e.preventDefault()
                    console.log(e.target.files[0])
                    setFieldValue("cv",e.target.files[0])
                  }}
                  onBlur={handleBlur}
                  className={"form-control"}
                />
                {errors.cv && touched.cv && (
                  <div className="text-danger">{errors.cv}</div>
                )}
                {ErrorContent(touched, "CV")}
              </div>
        }
              <div className="form-outline mb-4">
              <label htmlFor="profile_pic" className="form-label">Profile Picture</label>
                <input
                  id="profile_pic"
               
                  type="file"
                 
                  onChange={(e)=>{
                    e.preventDefault()
                    setFieldValue("profile_pic",e.target.files[0])
                  }}
                  onBlur={handleBlur}
                  className={"form-control"}
                />
                {errors.profile_pic && touched.profile_pic && (
                  <div className="text-danger">{errors.profile_pic}</div>
                )}
                {ErrorContent(touched, "profile_pic")}
              </div>
              <div className="form-outline mb-4">
                <input
                  id="password"
                  placeholder="Enter your password"
                  type="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={"form-control"}
                />
                {errors.password && touched.password && (
                  <div className="text-danger">{errors.password}</div>
                )}
                {ErrorContent(touched, "password")}
              </div>
              <div className="form-outline mb-4">
                <input
                  id="confirmPassword"
                  placeholder="Confirm Password"
                  type="password"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={"form-control"}
                />
                {errors.confirmPassword && touched.confirmPassword && (
                  <div className="text-danger">{errors.confirmPassword}</div>
                )}
              </div>
              <div className="common-text-center">
              <button
                className="btn btn-primary btn-sm"
                type="submit"
                disabled={isFormSubmitting}
              >
                Sign Up
              </button>
              </div>
            </form>
          );
        }}
      </Formik>
    </>
  );
}

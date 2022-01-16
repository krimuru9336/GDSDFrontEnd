import React, { useState } from "react";
import { Link } from "react-router-dom";
import SignupForm from "./SignupForm";
import axios from "axios";
import ResponseMessage from "../../common/ResponseMessage";

export default function Signup() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState("")
  const [cv, setCV] = useState("")

  const [responseMessage, setResponseMessage] = useState(false)
  const [errorResponseMessage, setErrorResponseMessage] = useState(false)

  const handleFormSubmit = async (values) => {
    setIsSubmitting(true);
    const {
      email,
      password,
      role,
      address,
      first_name,
      last_name,
      phone,
      dob,
      cv,
      profile_pic
    } = values;
    
    const baseEndPoint = process.env.REACT_APP_API_END_POINT;
    const studentRegisterUrl = baseEndPoint + "/api/student/register";
    const tutorRegisterURL = baseEndPoint + "/api/tutor/register";
    const apiEndPoint =
      role === "student" ? studentRegisterUrl : tutorRegisterURL;

      const reqBody = {
        email: email,
        password: password,
        address: address,
        last_name: last_name,
        first_name: first_name,
        phone_number: phone,
        DOB: dob,
        profile_pic: profile_pic ? profile_pic : null,
        CV: cv ?cv : null     } 
      const form_data = new FormData();

for ( var key in reqBody ) {
    form_data.append(key, reqBody[key]);
}
    axios
      .post(apiEndPoint,form_data,  {
        headers: {
            "Content-type": "multipart/form-data",
        },                    
    } )
      .then((res) => {
        console.log(res);
        setIsSubmitting(false);
       console.log(res.data)
       if(res.data.status === "success") {
        setResponseMessage("success")
       } else {
        setResponseMessage("Error")
        setErrorResponseMessage(res.data.data)
       }

setTimeout(()=>{
  setResponseMessage("")
}, 3000)
        
      })
      .catch((err) => {
        setResponseMessage(
          "error"
        
        )
        console.log(err);
        setIsSubmitting(false);
        //setResponseData("Error")
      });
  };

  return (
    <>
      <div className="mt-5 container col-md-4 col-sm-10 mb-5">
        <div className="card p-5">
      <div className="h-100 row align-items-center">
        <div className="col-md-12 col-sm-12 ">
        
          <h4 className="common-text-center mb-3 text-primary">Sign Up</h4>
          <SignupForm
            handleFormSubmit={handleFormSubmit}
            isFormSubmitting={isSubmitting}
            errorResponseMessage={errorResponseMessage}
          />
          <div className="common-text-center mt-3">
          <Link to="/login">Back To Login</Link>
          </div>

          <ResponseMessage 
          
          response={responseMessage} />
        </div>
      </div>
      </div>
      </div>
    </>
  );
}

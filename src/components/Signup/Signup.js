import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SignupForm from "./SignupForm";
import axios from "axios";
import ResponseMessage from "../../common/ResponseMessage";
import StudentSignupForm from "./StudentSignup";
import TutorSignupForm from "./TutorSignup";
import Navbar from "../../Navbar/FuldemyNavbar";

export default function Signup() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState("")
  const [cv, setCV] = useState("")

  const [responseMessage, setResponseMessage] = useState(false)
  const [errorResponseMessage, setErrorResponseMessage] = useState(false)
  const [skillOptions, setSkillOptions] = useState([])
  const [showSignUpFor, setShowSignUpFor] = useState("")

  useEffect(()=>{
    fetchSkills()
},[])

const fetchSkills = () => {
    const baseEndPoint = process.env.REACT_APP_API_END_POINT 
    const apiEndPoint = baseEndPoint+"/api/skills"

axios.get(apiEndPoint,{
})
  .then(res => {
  
   if(res.data) {
   
       let formattedData = res.data.map((i)=>{
         return {
           label: i.skill_name,
           value: i.id
         }
       })
       setSkillOptions(formattedData)
    
   }
  })
  .catch((err)=>{
   
 
  })

   
}

  const handleFormSubmit = async (values, role) => {
    setIsSubmitting(true);
    const {
      email,
      password,
      address,
      first_name,
      last_name,
      phone_number,
      dob,
      cv,
      profile_pic,
      skills_present
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
        phone_number: phone_number,
        DOB: dob,
      
        
       
      } 
      if(cv) {
        reqBody.CV =  cv
      }
      if(profile_pic) {
        reqBody.profile_pic = profile_pic
      }
      
      const form_data = new FormData();

for ( var key in reqBody ) {
    form_data.append(key, reqBody[key]);
    
}

const skills_presentArr = skills_present ? skills_present.map(i=>i.value): []


for(let skillId of skills_presentArr) {
  form_data.append('skills_present', skillId);
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
     <Navbar />
      <div className="mt-5 container col-md-4 col-sm-10 mb-5">
        <div className="card p-5">
      <div className="h-100 row align-items-center">
        <div className="col-md-12 col-sm-12 ">
        
          <h4 className="common-text-center mb-3 text-primary">
          {showSignUpFor && 
          showSignUpFor === "S" ? "Student " : "Tutor "}
            Sign Up</h4>
          {showSignUpFor ? 
          showSignUpFor === "S" ? 
          <StudentSignupForm
          handleFormSubmit={handleFormSubmit}
            isFormSubmitting={isSubmitting}
            errorResponseMessage={errorResponseMessage}
            skillOptions={skillOptions}
          />
          : <TutorSignupForm
          handleFormSubmit={handleFormSubmit}
          isFormSubmitting={isSubmitting}
          errorResponseMessage={errorResponseMessage}
          skillOptions={skillOptions}
          />
          : 
          <div className="row">
          <div className="card mt-4 col-md-4 col-lg-4 col-sm-12"
          onClick={()=>setShowSignUpFor("S")}
          style={{cursor: "pointer"}}
          >
<div className="card-content text-primary p-3">
  Student Signup
</div>

</div>
<div className="col-md-4">

</div>
<div className="card mt-4 col-md-4 col-lg-4 col-sm-12">
<div className="card-content p-3 text-primary"
 onClick={()=>setShowSignUpFor("T")}
 style={{cursor: "pointer"}}
>
  Tutor Signup
</div>

</div>
          </div>
          }
          
          
         {/* /*  <SignupForm
            handleFormSubmit={handleFormSubmit}
            isFormSubmitting={isSubmitting}
            errorResponseMessage={errorResponseMessage}
            skillOptions={skillOptions}
          />  */}
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

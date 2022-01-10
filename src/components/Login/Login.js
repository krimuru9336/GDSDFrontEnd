import React, {useState} from "react"
import LoginForm from "./LoginForm"
import { Link } from "react-router-dom";
import axios from "axios"

export default function Login(){
  const [isSubmitting, setIsSubmitting]= useState(false)

  const handleFormSubmit = async (values) => {
    setIsSubmitting(true)
    const baseEndPoint = process.env.REACT_APP_API_END_POINT   
    const apiEndPoint = baseEndPoint+"/api/auth/login/"
   const { email, password} = values

axios.post(apiEndPoint, {
    email: email,
    password: password,  
} )
  .then(res => {
    console.log(res)
    setIsSubmitting(false)
  }).catch(err=>{
    console.log(err)
    setIsSubmitting(false)
    //setResponseData("Error")
  })
}

    return (
        <>
        <div className="mt-5 container col-3">
        <div className="card p-5">
<div className="h-100 row align-items-center">
  <div className="col-md-12 col-sm-12 ">
    <h4 className="common-text-center mb-3 text-primary">Login</h4>
    <LoginForm 
    handleFormSubmit={handleFormSubmit} 
    isFormSubmitting={isSubmitting}
    />
    <div className="common-text-center mt-3">
    <Link to="/register">Join Us</Link>
    </div>
  </div>
  
</div>
</div>
</div>
        </>
    )
}
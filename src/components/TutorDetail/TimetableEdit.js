import React, {useEffect, useMemo, useState} from "react";
import axios from "axios"
import PersonalDescription from "./PersonalDescription";
import { useNavigate, useLocation } from 'react-router-dom';
import Navbar from "../../Navbar/FuldemyNavbar";
import { getToken } from "../../utils/utilityFunctions";
import ResponseMessage from "../../common/ResponseMessage";
import TimetableEditForm from "./TimetableEditForm";

export default function TimetableEdit() {

    const [isSubmitting, setIsSubmitting]= useState(false)
  const [responseMessage, setResponseMessage] = useState("")
  const navigate = useNavigate();
  const location = useLocation()

  const handleFormSubmit = async (values) => {
    setIsSubmitting(true)
    const baseEndPoint = process.env.REACT_APP_API_END_POINT   
    const apiEndPoint = baseEndPoint+"/api/tutor/timetable/"
   const { days_of_the_week, start_time, end_time} = values
  
   const tutorDetail = location.state ? location.state.tutorData : null

   const tutorId = tutorDetail ? tutorDetail.data ? tutorDetail.data.id : null : null
    const tutId = tutorId

axios.patch(apiEndPoint, {
    tutor_id: tutorId,
    days_of_the_week: days_of_the_week,
    start_time: start_time,  
    end_time:end_time,
} )
  .then(res => {
    
    setIsSubmitting(false)
    if(res.status === 200) {
      setResponseMessage("success")
     
navigate("/timetable", { state: { tutId } })

    } else {
      setResponseMessage("Update timetable Failed 37")
    }
  }).catch(err=>{
    console.log(err)
    setResponseMessage("Update timetable Failed 41")
    setIsSubmitting(false)
    //setResponseData("Error")
  })
  setTimeout(()=>{
    setResponseMessage("")
  }, 5000)
}

    return (
        <>
         <Navbar />
        <div className="mt-5 container col-md-3 col-sm-9">
        <div className="card p-5">
<div className="h-100 row align-items-center">
  <div className="col-md-12 col-sm-12 ">
    <h4 className="common-text-center mb-3 text-primary">Set your free time</h4>
    <TimetableEditForm
    handleFormSubmit={handleFormSubmit} 
    isFormSubmitting={isSubmitting}
    />
    
    <ResponseMessage response={responseMessage} />
  </div>
  
</div>
</div>
</div>
        </>
    )
}

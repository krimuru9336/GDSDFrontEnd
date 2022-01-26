import React from "react";
import catImage from "../Search/catImage.jpeg"
import PersonalDescription from "./PersonalDescription";
import { useNavigate, useLocation, Link  } from 'react-router-dom';
import Navbar from "../../Navbar/FuldemyNavbar";
import defaultImage from "../../assets/images/default.png"
import { isLoggedIn } from "../../utils/utilityFunctions";

export default function TutorDetail(){
    const navigate = useNavigate();
   
    const location = useLocation()
    
    const tutorDetail = location.state ? location.state.tutorDetail : null
    const profile_Image = tutorDetail ? tutorDetail.profile_pic ?  
    tutorDetail.profile_pic.includes("/api") ? tutorDetail.profile_pic : 
    tutorDetail.profile_pic.replace("/media", "/api/media") : defaultImage : defaultImage
    return (
        <>
        <Navbar />
             <div className="mt-5 container">
             <div className="d-flex flex-row-reverse mb-2">
            <button
            onClick={() => navigate(-1)}
            className="btn btn-sm btn-secondary">
                Back
            </button>
        </div>
        <div className="card p-5">
        
        <div className="row">
            <div className="col-3">
            <img src={profile_Image} className="col-md-12 mb-2"/>
            </div>
            <div className="col-9">
<PersonalDescription tutorDetail ={tutorDetail } />
            </div>
        </div>

        <div class="d-flex flex-row-reverse mt-2">
  {isLoggedIn() ?
  <>
 <div className="mr-2">
  <button 
  onClick={()=>{
    navigate("/messages", { state: {  tutorDetail } })
  }}
  style={{ marginLeft: "20px" }}
  className="btn btn-primary"
  >Message</button>
  </div>
  <div className="ml-2">
  <button className="btn btn-primary"
>Enroll</button> 
</div>
</> :
<Link className="btn btn-primary"
to="/login"
>Login to enroll</Link>  
 
}
  
</div>
       
        </div>
        </div>
        </>
    )
}
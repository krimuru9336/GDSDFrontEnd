import React from "react";
import catImage from "../Search/catImage.jpeg"
import PersonalDescription from "./PersonalDescription";
import { useNavigate, useLocation  } from 'react-router-dom';
import Navbar from "../../Navbar/FuldemyNavbar";

export default function TutorDetail(){
    const navigate = useNavigate();
   
    const location = useLocation()
    
    const tutorDetail = location.state ? location.state.tutorDetail : null
    
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
            <img src={tutorDetail ?  tutorDetail.profile_pic ?tutorDetail.profile_pic : catImage : catImage} className="col-md-10 mb-2"/>
            </div>
            <div className="col-9">
<PersonalDescription tutorDetail ={tutorDetail } />
            </div>
        </div>
       
        </div>
        </div>
        </>
    )
}
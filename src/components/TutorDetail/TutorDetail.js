import React from "react";
import catImage from "../Search/catImage.jpeg"
import PersonalDescription from "./PersonalDescription";
import { useNavigate } from 'react-router-dom';

export default function TutorDetail(){
    const navigate = useNavigate();
    return (
        <>
       
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
            <img src={catImage} className="col-md-10 mb-2"/>
            </div>
            <div className="col-9">
<PersonalDescription />
            </div>
        </div>
        <div className="row">
            <div className="col-6">
           Other
            </div>
            <div className="col-6">
Academic
            </div>
        </div>
        </div>
        </div>
        </>
    )
}
import React from "react";
import { useNavigate } from 'react-router-dom';
import defaultImage from "../../../assets/images/default.png"
import FormComponent from "./FormComponent"

export default function TutorForm(){
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
            <h5 className="text-primary">Tutor Profile</h5>
            <div className="col-3 col-md-3 mt-2">
           <img src={defaultImage} height="120" width="120" />
<input type="file" className="mt-2"></input>
            </div>
            <div className="col-8">
<FormComponent />
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
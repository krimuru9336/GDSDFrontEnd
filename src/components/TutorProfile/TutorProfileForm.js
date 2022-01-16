import React from "react";
import { initialValues } from "./schema";
import defaultImage from "../../assets/images/default.png"
import FormComponent from "./FormComponent"

export default function TutorProfileForm({onEditClickClose, tutorData}){
    return (
        <>
        <div className="card p-5">
        <div className="d-flex flex-row-reverse mb-2">
           
           <button
           onClick={onEditClickClose}
           className="btn btn-sm btn-primary">
             Cancel
           </button>
       </div>
        <div className="row">
            <h5 className="text-primary">Update Tutor Profile</h5>
            <div className="col-3 col-md-3 mt-2">
           <img src={defaultImage} height="120" width="120" />
<input type="file" className="mt-2"></input>
            </div>
            <div className="col-8">
<FormComponent formData={tutorData?.data} />
            </div>
        </div>
        {/* <div className="row">
            <div className="col-6">
           Other
            </div>
            <div className="col-6">
Academic
            </div>
        </div> */}
        </div>
       
        </>
    )
}
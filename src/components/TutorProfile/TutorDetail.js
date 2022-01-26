import React from "react"
import defaultImage from "../../assets/images/default.png"

export default function TutorDetail({onEditClick, tutorData}){
    const { first_name, last_name,email , address, phone_number, DOB
    , skills_text, profile_pic, CV, is_teacher
    } = tutorData.data
   const profileImage = profile_pic ? profile_pic: defaultImage 
   
   const cvFormattedText = CV ? CV  : null

   

   return (
        <div className="card p-5">

        <div className="d-flex flex-row-reverse mb-2">
           
           <button
           onClick={onEditClick}
           className="btn btn-sm btn-primary">
               Edit
           </button>
       </div>
        <div className="row">
            <h5 className="text-primary">Tutor Profile</h5>
            <div className="col-md-3 col-sm-12 col-xs-12 mt-2">
           <img src={profileImage} height="150" width="150" />
{/* <input type="file" className="mt-2"></input> */}
            </div>
            <div className="col-md-9 col-xs-12 col-sm-12">
            <div className="card">
            <div className="card-header">
                Personal Description
            </div>
            <div className="card-body">
            <ul className="list-group list-group-flush">
    <li className="list-group-item">First Name: {first_name}</li>
    <li className="list-group-item">Last Name: {last_name}</li>
    <li className="list-group-item">Email: {email}</li>
    <li className="list-group-item">Address: {address}</li>
    <li className="list-group-item">Phone Number: {phone_number}</li>
    <li className="list-group-item">DOB: {DOB}</li>
    <li className="list-group-item">Skills: {skills_text}</li>
    {is_teacher &&
    <li className="list-group-item">CV: {cvFormattedText ? <a 
    target="_blank"
    href={cvFormattedText}>Download</a> : "No CV"}</li>}
  </ul>
            </div>
        </div>
            </div>
        </div>
        
        </div>
    )
}
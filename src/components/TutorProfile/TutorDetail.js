import React from "react"
import defaultImage from "../../assets/images/default.png"

export default function TutorDetail({onEditClick, tutorData}){
    const { first_name, last_name,email , address, phone_number, DOB} = tutorData.data
   
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
            <div className="col-3 col-md-3 mt-2">
           <img src={defaultImage} height="120" width="120" />
<input type="file" className="mt-2"></input>
            </div>
            <div className="col-8">
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
  </ul>
            </div>
        </div>
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
    )
}
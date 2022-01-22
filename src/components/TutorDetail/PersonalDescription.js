import React from "react"

export default function PersonalDescription({tutorDetail }){
    console.log(tutorDetail)
    return (
        <div className="card">
            <div className="card-header">
                Personal Description
            </div>
            <div className="card-body">
            <ul className="list-group list-group-flush">
    <li className="list-group-item">First Name: {tutorDetail?.first_name}</li>
    <li className="list-group-item">Last Name: {tutorDetail?.last_name}</li>
    <li className="list-group-item">Email: {tutorDetail?.email}</li>
    <li className="list-group-item">Skills: {tutorDetail?.skills_text}</li>
  </ul>
            </div>
        </div>
    )
}
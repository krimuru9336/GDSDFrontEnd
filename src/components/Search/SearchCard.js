import React from "react"

export default function SearchCard({tutor_last_name, tutor_first_name}) {
    return (
        
        <div className="card">
 
  <div className="card-body">
    <h5 className="card-title">
        First Name: {tutor_first_name} </h5>
    <p className="card-text">LastName: {tutor_last_name}</p>
    <button className="btn btn-primary">Enroll</button>
  </div>
</div>
    )
}
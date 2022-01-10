import React from "react"
import catImage from "../Search/catImage.jpeg"
import { Link } from "react-router-dom"

export default function TutorCard({tutor_last_name, tutor_first_name}) {

  const imgFile="http://44.201.189.246:8000/imgTest.png"
  const imgFile1="https://dummyimage.com/300"

 
    return (
        
        <div className="card">
 
  <div className="card-body common-text-center">
    <h5 className="card-title">
        First Name: {tutor_first_name} </h5>
    <p className="card-text">LastName: {tutor_last_name}</p>
    <img src={catImage} className="col-md-10 mb-2"/>
    <Link className="btn btn-primary" to="/tutor-detail">Enroll</Link>
  </div>
</div>
    )
}
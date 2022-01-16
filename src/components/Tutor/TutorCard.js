import React from "react"
import catImage from "../Search/catImage.jpeg"
import { Link } from "react-router-dom"

export default function TutorCard({tutor_last_name, tutor_first_name}) {

  const imgFile="http://44.201.189.246:8000/imgTest.png"
  const imgFile1="https://dummyimage.com/300"

 
    return (
        
        <div className="card">
 
  <div className="card-body common-text-center">
   
    <img src={catImage} className="col-md-10 mb-2"/>
    <h6 className="card-title text-primary">
        {tutor_first_name} {tutor_last_name}</h6>
        <div className="ratings">
           <i className="fa fa-star rating-color"></i>
            <i className="fa fa-star rating-color"></i> 
            <i className="fa fa-star rating-color"></i> 
            <i className="fa fa-star rating-color"></i> 
            <i className="fa fa-star"></i> </div>
    <Link className="btn btn-primary" to="/tutor-detail">Enroll</Link>
  </div>
</div>
    )
}
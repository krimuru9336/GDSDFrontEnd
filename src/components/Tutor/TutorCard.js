import React from "react"
import catImage from "../Search/catImage.jpeg"
import { Link } from "react-router-dom"

export default function TutorCard({tutorDetail}) {

  const imgFile="http://44.201.189.246:8000/imgTest.png"
  const imgFile1="https://dummyimage.com/300"

 const {last_name, first_name, profile_pic, skills_text} = tutorDetail
    return (
        
        <div className="card">
 
  <div className="card-body common-text-center">
   
    <img src={profile_pic ? profile_pic : catImage} className="col-md-10 mb-2"/>
    <h6 className="card-title text-primary">
        {first_name} {last_name}</h6>
        <div className="ratings">
           <i className="fa fa-star rating-color"></i>
            <i className="fa fa-star rating-color"></i> 
            <i className="fa fa-star rating-color"></i> 
            <i className="fa fa-star rating-color"></i> 
            <i className="fa fa-star"></i> </div>
            <p>{skills_text ? skills_text.substring(0,50) : ""}</p>
    <Link className="btn btn-primary"
     state={{
      tutorDetail
    }}
    to="/tutor-detail">Enroll</Link>
  </div>
</div>
    )
}
import React from "react"
import catImage from "./catImage.jpeg"

export default function SearchCard({tutor_last_name, tutor_first_name}) {
  const imgFile="http://44.201.189.246:8000/imgTest.png"
  const imgFile1="https://dummyimage.com/300"
    return (
        
        <div className="card">
 
  <div className="card-body">
    <h5 className="card-title">
        First Name: {tutor_first_name} </h5>
    <p className="card-text">LastName: {tutor_last_name}</p>
    <img src={catImage} className="col-md-10 mb-2"/>
    <button className="btn btn-primary">Enroll</button>
  </div>
</div>
    )
}
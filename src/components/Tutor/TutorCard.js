import React from "react"
import catImage from "../Search/catImage.jpeg"
import { Link } from "react-router-dom"
import defaultImage from "../../assets/images/default.png"
import {useNavigate} from "react-router-dom"

export default function TutorCard({tutorDetail}) {
const navigate = useNavigate()
  const imgFile="http://44.201.189.246:8000/imgTest.png"
  const imgFile1="https://dummyimage.com/300"

 const {last_name, first_name, profile_pic, skills_text} = tutorDetail
 const profile_Image = profile_pic ? profile_pic :  defaultImage
    return (
        
        <div className="card"
        onClick={()=>
          navigate("/tutor-detail", { state: {  tutorDetail } })
        }
        >
 
  <div className="card-body common-text-center"
  style={{cursor: "pointer"}}
  >
   
    <img src={profile_Image} 
    height="130" width="130"
    className="col-md-10 mb-2"/>
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
    to="/tutor-detail">Detail</Link>
  </div>
</div>
    )
}
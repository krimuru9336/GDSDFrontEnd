import React, {useEffect, useState} from "react"
import { useLocation } from "react-router";
import axios from "axios"
import ResponseMessage from "../../common/ResponseMessage"

export default function UpdateTutor() {
  
  let data = useLocation();
    const [id, setId] = useState("")
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [responseData, setResponseData] = useState(null)
   
useEffect(()=>{
let id = data.pathname.split("/")[2]
  if(id) {
    const baseEndPoint = process.env.REACT_APP_API_END_POINT   
    const apiEndPoint = baseEndPoint+"/tutors/"+id
 
axios.get(apiEndPoint)
  .then(res => {
    const {tutor_email, tutor_first_name, tutor_last_name} = res.data.data
    setId(id)
    setEmail(tutor_email)
    setFirstname(tutor_first_name)
    setLastname(tutor_last_name)
  })
  }

},[])


    const formSubmit = (e) => {
        e.preventDefault()
        const baseEndPoint = process.env.REACT_APP_API_END_POINT   
        const apiEndPoint = baseEndPoint+"/tutors/"+id
       
    axios.patch(apiEndPoint, {
        tutor_first_name: firstname,
            tutor_last_name: lastname,
            tutor_email: email
    } )
      .then(res => {
        setResponseData(res.data.status)
      }).catch(err=>{
    
        setResponseData(err.response.data)
      })
    }
    return (
        <div>
            <h1>Update Tutor</h1>
            <form onSubmit={formSubmit}>
  
  <div className="form-group  col-md-3 col-sm-12">
    <label htmlFor="id">Id</label>
    <input type="number"
    value={id}
    onChange={(e)=>setId(e.target.value)}
    className="form-control" id="id" 
    aria-describedby="emailHelp" placeholder="Enter Id" />
  </div>
  <div className="form-group  col-md-3 col-sm-12">
    <label htmlFor="fname">FirstName</label>
    <input type="text"
    value={firstname}
    onChange={(e)=>setFirstname(e.target.value)}
    className="form-control" id="fname" aria-describedby="emailHelp" placeholder="Enter firstname" />
   
  </div>
  <div className="form-group  col-md-3 col-sm-12">
    <label htmlFor="lname">LastName</label>
    <input 
    value={lastname}
    onChange={(e)=>setLastname(e.target.value)}
    type="text" className="form-control" id="lname" aria-describedby="emailHelp" placeholder="Enter lastname" />
   
  </div>
  <div className="form-group  col-md-3 col-sm-12">
    <label htmlFor="emai">Email address</label>
    <input 
    value={email}
    onChange={(e)=>setEmail(e.target.value)}
    type="text" className="form-control" id="emai" aria-describedby="emailHelp" placeholder="Enter email" />
   
  </div>

  <div className=" col-md-3 col-sm-12">
  <button type="submit" className="btn btn-primary mt-2">Submit</button>
  </div>
</form>

<ResponseMessage response={responseData} />
        </div>
    )
}
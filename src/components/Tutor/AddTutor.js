import React, { useState} from "react"
import axios from "axios"
import ResponseMessage from "../../common/ResponseMessage"

export default function AddTutor() {
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [responseData, setResponseData] = useState(null)
   


    const formSubmit = (e) => {
        e.preventDefault()
        const baseEndPoint = process.env.REACT_APP_API_END_POINT   
        const apiEndPoint = baseEndPoint+"/tutors"
       
    axios.post(apiEndPoint, {
        tutor_first_name: firstname,
            tutor_last_name: lastname,
            tutor_email: email
    } )
      .then(res => {
        setResponseData(res.data ? res.data.status : "Error")
      }).catch(err=>{
        console.log(err)
        setResponseData("Error")
      })
    }
    return (
        <div>
            <h1>Add Tutor</h1>
            <form onSubmit={formSubmit}>
  <div className="form-group col-3">
    <label htmlFor="fname" className="form-label">FirstName</label>
    <input type="text"
    value={firstname}
    onChange={(e)=>setFirstname(e.target.value)}
    className="form-control" id="fname" aria-describedby="emailHelp" placeholder="Enter firstname" />
   
  </div>
  <div className="form-group col-3">
    <label htmlFor="lname">LastName</label>
    <input 
    value={lastname}
    onChange={(e)=>setLastname(e.target.value)}
    type="text" className="form-control" id="lname" aria-describedby="emailHelp" placeholder="Enter lastname" />
   
  </div>
  <div className="form-group col-3">
    <label htmlFor="em">Email address</label>
    <input 
    value={email}
    onChange={(e)=>setEmail(e.target.value)}
    type="text" className="form-control" id="em" aria-describedby="emailHelp" placeholder="Enter email" />
   
  </div>

<div className="col-3">
  <button type="submit" className="btn btn-primary mt-2">Submit</button>
  </div>
</form>


    <ResponseMessage response={responseData} />

        </div>
    )
}
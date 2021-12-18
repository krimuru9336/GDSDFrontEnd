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
        setResponseData(res.data.status)
      }).catch(err=>{
        console.log(err)
        setResponseData(err.response.data)
      })
    }
    return (
        <div>
            <h1>Add Tutor</h1>
            <form onSubmit={formSubmit}>
  <div class="form-group">
    <label for="exampleInputEmail1">FirstName</label>
    <input type="text"
    value={firstname}
    onChange={(e)=>setFirstname(e.target.value)}
    class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter firstname" />
   
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">LastName</label>
    <input 
    value={lastname}
    onChange={(e)=>setLastname(e.target.value)}
    type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter lastname" />
   
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input 
    value={email}
    onChange={(e)=>setEmail(e.target.value)}
    type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
   
  </div>

 
  <button type="submit" className="btn btn-primary mt-2">Submit</button>
</form>


    <ResponseMessage response={responseData} />

        </div>
    )
}
import React, {useEffect, useState} from "react"
import axios from "axios"

export default function UpdateTutor() {
    const [id, setId] = useState("")
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [responseData, setResponseData] = useState(null)
   

 


    const formSubmit = (e) => {
        e.preventDefault()
        const baseEndPoint = "http://localhost:8000"  
        const apiEndPoint = baseEndPoint+"/update-tutor"
       
    axios.patch(apiEndPoint, {
        id: id,
        tutor_first_name: firstname,
            tutor_last_name: lastname,
            tutor_email: email
    } )
      .then(res => {
        console.log(res);
        console.log(res.data);
        setResponseData(res.data)
      })
    }
    return (
        <div>
            <h1>Update Tutor</h1>
            <form onSubmit={formSubmit}>
  <div class="form-group">
  <div class="form-group">
    <label htmlFor="exampleInputEmail13">Id</label>
    <input type="number"
    value={id}
    onChange={(e)=>setId(e.target.value)}
    class="form-control" id="exampleInputEmail13" 
    aria-describedby="emailHelp" placeholder="Enter Id" />
   
  </div>

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
    type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
   
  </div>

 
  <button type="submit" className="btn btn-primary mt-2">Submit</button>
</form>

<div className="mt-5">
    {responseData && 
    <div>Save Response ===
    {JSON.stringify(responseData)}
    </div>
    }
</div>
        </div>
    )
}
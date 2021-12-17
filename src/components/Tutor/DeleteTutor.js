import React, {useEffect, useState} from "react"
import axios from "axios"

export default function DeleteTutor() {
    const [id, setId] = useState("")

    const [responseData, setResponseData] = useState(null)
 
    const formSubmit = (e) => {
        e.preventDefault()
        const baseEndPoint = "http://localhost:8000"  
        const apiEndPoint = baseEndPoint+"/delete-tutor?id="+id
       
    axios.get(apiEndPoint)
      .then(res => {
        console.log(res);
        console.log(res.data);
        setResponseData(res.data)
      })
    }
    return (
        <div>
            <h1>Delete Tutor</h1>
            <form onSubmit={formSubmit}>
  <div class="form-group">
    <label for="exampleInputEmail1">Id</label>
    <input type="number"
    value={id}
    onChange={(e)=>setId(e.target.value)}
    class="form-control" id="exampleInputEmail1" 
    aria-describedby="emailHelp" placeholder="Enter Id" />
   
  </div>


 
  <button type="submit" className="btn btn-primary mt-2">Delete</button>
</form>

<div className="mt-5">
    {responseData && 
    <div>Delete Response ===
    {JSON.stringify(responseData)}
    </div>
    }
</div>
        </div>
    )
}
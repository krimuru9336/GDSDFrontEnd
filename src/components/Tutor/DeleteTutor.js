import React, { useState} from "react"
import axios from "axios"
import ResponseMessage from "../../common/ResponseMessage"

export default function DeleteTutor() {
    const [id, setId] = useState("")

    const [responseData, setResponseData] = useState(null)
 
    const formSubmit = (e) => {
        e.preventDefault()
        const baseEndPoint = process.env.REACT_APP_API_END_POINT  
        const apiEndPoint = baseEndPoint+"/tutors/"+id
       
    axios.delete(apiEndPoint)
      .then(res => {
        setResponseData(res.data.status)
      }).catch(err=>{
        setResponseData("Error")
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


<ResponseMessage response={responseData} />
        </div>
    )
}
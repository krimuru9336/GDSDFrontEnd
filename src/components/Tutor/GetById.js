import React, { useState} from "react"
import axios from "axios"
import ResponseMessage from "../../common/ResponseMessage"

export default function GetByIdTutor() {
    const [id, setId] = useState("")
    const [responseData, setResponseData] = useState(null)
    const [errMsg, setErrMsg] = useState(null)
    const [showLoader, setShowLoader] = useState(false)
 
    const formSubmit = async (e) => {
        e.preventDefault()
        const baseEndPoint = process.env.REACT_APP_API_END_POINT   
        const apiEndPoint = baseEndPoint+"/tutors/"+id
       setShowLoader(true)
    axios.get(apiEndPoint)
      .then(res => {
        setShowLoader(false)
        setResponseData(res.data.data)
        setErrMsg(null)
      })
      .catch((err)=>{
        setShowLoader(false)
        setResponseData(null)
        setErrMsg(err.response.message ? err.response.message : "Error" )
      })
    }
    return (
        <div>
            <h1>Get Tutor</h1>
            <form onSubmit={formSubmit}>
  <div className="form-group  col-md-3 col-sm-12">
    <label htmlFor="id">Id</label>
    <input type="number"
    value={id}
    onChange={(e)=>setId(e.target.value)}
    className="form-control" id="id" 
    aria-describedby="emailHelp" placeholder="Enter Id" />
   
  </div>


  <div className=" col-md-3 col-sm-12">
  <button type="submit" className="btn btn-primary mt-2">Get</button>
  </div>
</form>

<div className="mt-5">
    {showLoader ? "Fetching....." :
    responseData && 
   <div> 
      <ul className="list-group">
      <li className="list-group-item">First Name: {responseData ? responseData.tutor_first_name : ""}</li>
      <li className="list-group-item">Last Name: {responseData ? responseData.tutor_last_name : ""}</li>
      <li className="list-group-item">Email: {responseData ? responseData.tutor_email : ""}</li>
      </ul>
      </div>
    
    }
  
</div>
<ResponseMessage response={errMsg} />
        </div>
    )
}
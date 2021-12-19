import React, {useState, useEffect} from "react";
import ResponseMessage from "../common/ResponseMessage";
import axios from "axios"
import Search from "../components/Search/Search";

export default function Home() {
    const [searchTerm, setSearchTerm] = useState("")
    const [searchResults, setSearchResults] = useState([])
    const [errMsg, setErrMsg] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(()=>{
        fetchTableData()
    },[])

    const fetchTableData = () => {
        const baseEndPoint = process.env.REACT_APP_API_END_POINT 
        const apiEndPoint = baseEndPoint+"/tutors"
     setIsLoading(true)
    axios.get(apiEndPoint)
      .then(res => {
        setIsLoading(false)
        setSearchResults(res.data)
      })
      .catch((err)=>{
        setErrMsg("Error")
        setIsLoading(false)
      })
    }

    const onFormSubmit = (e) => {
        setSearchTerm(e.target.value)
   
        const baseEndPoint = process.env.REACT_APP_API_END_POINT   
        const apiEndPoint = baseEndPoint+"/tutors/?search="+e.target.value
        setIsLoading(true)
    axios.get(apiEndPoint)
      .then(res => {
        setIsLoading(false)
        setSearchResults(res.data)
        setErrMsg(null)
      }).catch(err=>{
        setIsLoading(false)
        setSearchResults([])
        setErrMsg(err.response ? err.response.message ? 
            err.response.message : "Error" : "Error" )
      })
    }
    return (
        <div className="App">

<h2>Welcome To Fuldemy</h2>


<form className="form-inline" >

<div className="form-group col-3">
 
  <input type="text" className="form-control" 
  value={searchTerm}
onChange={(e)=>
    onFormSubmit(e)
    }
  id="inputPassword2" placeholder="Search..." />
   <button type="button" className="btn bg-transparent" 
   style={{marginLeft: "-40px",zIndex: "100"}}>
    <i className="fa fa-times"></i>
  </button>
</div>

</form>

<div className="mt-4">
    {!isLoading &&
    <Search searchResults={searchResults} /> }
</div>
<ResponseMessage response={errMsg} />
            </div>
    )
}
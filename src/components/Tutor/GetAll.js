import React, { useEffect, useState} from "react"
import axios from "axios"
import { TutorTable } from "./GetAllTable"
import ResponseMessage from "../../common/ResponseMessage"


export default function GetAll() {
  
    const [tutorList,setTutorList] = useState([])
    const [responseData, setResponseData] = useState(null)
    const [responseDeleteData, setResponseDeleteData] = useState(null)

    useEffect(()=>{
        fetchTableData()
    },[])

    const fetchTableData = () => {
        const baseEndPoint = process.env.REACT_APP_API_END_POINT 
        const apiEndPoint = baseEndPoint+"/tutors"
     
    axios.get(apiEndPoint)
      .then(res => {
       
        setTutorList(res.data)
        
      })
      .catch((err)=>{
          setResponseData("Error")
      })
    }

    const onDeleteClick = (tutorId) => {
        const baseEndPoint = process.env.REACT_APP_API_END_POINT  
        const apiEndPoint = baseEndPoint+"/tutors/"+tutorId
    axios.delete(apiEndPoint)
      .then(res => {
        setResponseDeleteData(res.data.status)
        fetchTableData()
      }).catch(err=>{
        console.log(err)
        setResponseDeleteData(err.response.data)
      })
    }

  

    return(
        <div>
        <h1>Get Tutor</h1>
        <ResponseMessage response={responseDeleteData} />
        <ResponseMessage response={responseData} />
        <TutorTable data={tutorList} onDeleteClick={onDeleteClick}
       
        />

        </div>
    )
}

import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

import { getToken } from "../../utils/utilityFunctions";
import Navbar from "../../Navbar/FuldemyNavbar";
import ResponseMessage from "../../common/ResponseMessage";

export default function TimetableDelete() {
    const navigate = useNavigate();
    const [timetableList, setTimetableList] = useState([])
    const location = useLocation()
    const [responseMessage, setResponseMessage] = useState("")

    useEffect(()=>{
fetchTimeTableFOrUsers()
    }, [])


    const fetchTimeTableFOrUsers = () => {
        const token = getToken()
        const tutorId = location.state ? location.state.tutId : null
      
        const baseEndPoint = process.env.REACT_APP_API_END_POINT
        const apiEndPoint = baseEndPoint + "/api/tutor/timetable/" + tutorId

        if (token) {
        axios.get(apiEndPoint, {
            headers: {
                Authorization: "Bearer " + token
            }
        })
            .then(res => {
                
               
                if(res.data) {
                    if(res.data.data){
                        
                        setTimetableList(res.data.data)
                    }
                }
            })
            .catch((err) => {
                console.log("KriErr",err)
                setTimetableList([])

            })
        }
    }

    const deleteTimeTable = (id) => {
        if(id) {
            const token = getToken()
        
            const baseEndPoint = process.env.REACT_APP_API_END_POINT
            const apiEndPoint = baseEndPoint + "/api/tutor/timetable/" + id
    
            if (token) {
            axios.delete(apiEndPoint, {
                headers: {
                    Authorization: "Bearer " + token
                }
            })
                .then(res => {
                    
                    setResponseMessage("success")
                        fetchTimeTableFOrUsers()
                        setTimeout(()=>{
                            setResponseMessage("")
                        }, 5000)
                   
                })
                .catch((err) => {
                   
                    setResponseMessage("error")
                    setTimeout(()=>{
                        setResponseMessage("")
                    }, 5000)
                })
            }
        }
    }

    return (


        
        <div>
            <Navbar />
            <div className="container">
            <button onClick={() => navigate(-1)} className=" mt-3 btn btn-sm btn-secondary">
          Back
        </button>
        <div>
        <ResponseMessage response={responseMessage} />
          <div className="mt-4">
            <div className="row">
              {timetableList.length > 0
                ? timetableList.map((item, index) => {
                    return (
                      <div key={item.id} className="col-12"  >
                        <div  className="col-md-12 well">
                            Day: {item.days_of_the_week}
                            <br />
                            Time : {item.start_time

                            } - {item.end_time

                            }
                            <button
                      onClick={() => {
                         deleteTimeTable(item.id)
                      }}
                      style={{ marginLeft: "20px" }}
                      className="btn btn-danger"
                  >Delete Timetable</button>
                            <hr />
                        {/*   <AdminList
                            admins={item}
                            onSuccessApproveReject={() => fetchTableData()}
                          />
                          {console.log(item)} */}
                        </div>
                      </div>
                    );
                  })
                : "No Result"}
            </div>
          </div>
        </div>
            </div>
        
      </div>
    )
}
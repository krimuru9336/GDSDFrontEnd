import React, {useEffect, useMemo, useState} from "react";
import axios from "axios"
import PersonalDescription from "./PersonalDescription";
import { useNavigate, useLocation } from 'react-router-dom';
import Navbar from "../../Navbar/FuldemyNavbar";
import { getToken } from "../../utils/utilityFunctions";


export default function Timetable() {


    const [timetableList, setTimetableList] = useState([])
    const location = useLocation()
    const token = getToken()     

    useEffect(()=>{
        // Call API
        // you will get data
        // set the data received from API to letOurData variable
        // And 
        // DO this to the API result data

       
        const tutorId = location.state ? location.state.tutId : null
        // const tutorId = tutorDetail.id
        console.log("KRIID",tutorId)
        const baseEndPoint = process.env.REACT_APP_API_END_POINT
        const apiEndPoint = baseEndPoint + "/api/tutor/timetable/" + tutorId

        if (token) {
        axios.get(apiEndPoint, {
            headers: {
                Authorization: "Bearer " + token
            }
        })
            .then(res => {
                console.log("Kri",res.data)
               
                if(res.data) {
                    if(res.data.data){
                        const ourDayDataconverted = res.data.data.map((i)=> {
                            const startTimeInt = convertTimeToInt(i.start_time)
                            const endTimeInt = convertTimeToInt(i.end_time)
                            return {
                                ...i,
                                startTimeInt,
                                endTimeInt
                            }
                        })
                        setTimetableList(ourDayDataconverted)
                    }
                }
            })
            .catch((err) => {
                console.log("KriErr",err)
                setTimetableList([])

            })
        }
        
        
        // Store this in one state and use that state instead of ourDayDataconverted in the method isTimeInBetween

    }, [])


    // DOnt change it, its needed
   const timeList = useMemo(()=>[
       {
           label: "Time",
           value: 9999
       },
       {
           label: "8:00",
           value: 8
       },
       {
        label: "9:00",
        value: 9
    },
    {
        label: "10:00",
        value: 10
    },
    {
        label: "11:00",
        value: 11
    },
    {
        label: "12:00",
        value: 12
    },
    {
        label: "13:00",
        value: 13
    },
    {
        label: "14:00",
        value: 14
    },
    {
        label: "15:00",
        value: 15
    },
    {
        label: "16:00",
        value: 16
    },
    {
        label: "17:00",
        value: 17
    },
   ],[])

// DOnt change it, its needed
   const daysList = useMemo(()=>[
       {
           label: "Time",
           dayValue: 0
       },
       {
           label: "Sunday",
           dayValue: 1
       },
       {
        label: "Monday",
        dayValue: 2
    },
    {
        label: "Tuesday",
        dayValue: 3
    },
    {
        label: "Wednesday",
        dayValue: 4
    },
    {
        label: "Thursday",
        dayValue: 5
    },
    {
        label: "Friday",
        dayValue: 6
    },
    {
        label: "Saturday",
        dayValue: 7
    },
   ],[])

   // You wont need it, u will ge tthis from API
   const letOurDataHard = [
    {
        days_of_the_week: 1,
        tutor_name: "Ram",
        start_time: "09:10:36",
        end_time: "10:10:38",
        id: 1
    },
    {
        days_of_the_week: 1,
        tutor_name: "Dipesh",
        start_time: "14:42:33",
        end_time: "15:42:33",
        id: 3
    },
    {
        days_of_the_week: 5,
        tutor_name: "Prakash",
        start_time: "12:05:36",
        end_time: "13:10:38",
        id: 1
    },
   ]

//    const [startVal,setStart] = useState(letOurData);

   /**
    * Method to format time to integer format
    * @param {*} time 
    * @returns 
    */
   const convertTimeToInt = (time) =>{
    const timeSplitted = time.split(":")
    const hrBeforeDecimal = parseInt(timeSplitted[0])
    const minAfterDecimal = parseInt(timeSplitted[1]) * 0.01
    const result = hrBeforeDecimal + minAfterDecimal
    return result
   }

   // convert start date and time of our data to integer
//    const ourDayDataconverted = letOurData.map((i)=> {
//        const startTimeInt = convertTimeToInt(i.start_time)
//        const endTimeInt = convertTimeToInt(i.end_time)
//        return {
//            ...i,
//            startTimeInt,
//            endTimeInt
//        }
//    })

   const isTimeInBetween = (currentIndexHr, dayValue) => {
    let flag = false
    timetableList.forEach((i)=>{
        if(i.days_of_the_week === dayValue+1) {
            if(i.startTimeInt-1 < currentIndexHr && i.endTimeInt-1 >= currentIndexHr){
                // Instead of true, you can return any thing like subject name present or tutor name, it will hsow in that row
                // flag = true

                flag = i.start_time + " to " + i.end_time;

            }
        }
        
    })
    return flag
   }
   

   const navigate = useNavigate();
    return ( 
        
    <div>      
        <Navbar />
        {/* <button
            onClick={() => {
                
                const tutorDetail = location.state ? location.state.tutorDetail : null
                navigate("/timetable-edit", { state: { tutorDetail } })
            }}
            style={{ marginLeft: "20px" }}
            className="btn btn-primary"
        >Edit Timetable</button> */}
<br/>
<table class="table">
  <tbody>  
{timeList.map((timeIndex, i)=>{
    return (
        <React.Fragment key={"pp-"+i}>
        <tr key={"pp"+i}>
{daysList.map((dayIndex, j)=>{
        return (
            <React.Fragment key={"rr-"+j}>
{timeIndex.value === 9999  ? <th scope="col">{dayIndex.label}</th>: 
<>
                {dayIndex.dayValue === 0 && 
                <th scope="row">{timeIndex.label}</th>
                }
    <td>{isTimeInBetween(timeIndex.value, dayIndex.dayValue) ? <div style={{backgroundColor:"#0cff08"}}>  
     
     {isTimeInBetween(timeIndex.value, dayIndex.dayValue)}

    {/* {startVal.map((test) => { 
    return(
       <div> {test.start_time}</div>
        );
        }
    )
    } */}

    

        </div> : ""
    }</td>
    </>}
            </React.Fragment>
        )
    })}
        </tr>
        </React.Fragment>
    )
   
})}
  </tbody>
</table>


                   
             
        
    </div>

    );
}
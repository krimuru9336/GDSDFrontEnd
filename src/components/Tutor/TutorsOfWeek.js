import React from "react"

import TutorCard from "./TutorCard"

export default function TutorsOfWeek({ tutors}) {
    const data = [
        {
            id: 1,
            tutor_first_name: "Ramesh",
            tutor_last_name: "Suresh"
        },
        {
            id: 2,
            tutor_first_name: "Hari",
            tutor_last_name: "Zuk"
        },
        {
            id: 3,
            tutor_first_name: "Hamile",
            tutor_last_name: "Pap"
        },
        {
            id: 1,
            tutor_first_name: "Sanke",
            tutor_last_name: "SuSuman" 
        },

    ]
    return (
        <>
        <div className="mt-4">
        <h5 className="justify-left  text-primary mb-2">Tutors of the week</h5>
        <div className="row">
    {tutors.length > 0 ?
    tutors.map((item, index)=>{
        return (
            <div
            key={item.id}
            className="col-md-3 mb-2 col-sm-12"
            >
                <TutorCard
                tutor_first_name={item.tutor_first_name}
                tutor_last_name={item.tutor_last_name}
                />
            </div>
        )
    })
 : "No Result"} 
 </div>
 </div>
        </>
    )
}
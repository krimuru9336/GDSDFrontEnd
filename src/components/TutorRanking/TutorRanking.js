import React from "react"
import TutorCard from "../Tutor/TutorCard"


export default function TutorRating({ tutors }) {
    return (

        <>
            <div className="mt-4">
                <h5 className="justify-left  text-primary mb-2">Top Rated Tutor</h5>
                <div className="row">
                    {tutors.length > 0 ?
                        tutors.map((item, index) => {
                            return (
                                <div
                                    key={item.id}
                                    className="col-md-3 mb-2 col-sm-12"
                                >
                                    <TutorCard
                                        tutorDetail={item}
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
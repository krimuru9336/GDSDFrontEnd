import React, { useState } from "react"
import ResponseMessage from "../../common/ResponseMessage"

export default function EnrollmentForm({ skillOptions, onCancelClick, tutorDetail, handleEnrollmentSubmit, responseMessage }) {
    const [subject, setSubject] = useState("")
    const [classStartDate, setClassStartDate] = useState(new Date())
    const filteredSkills = skillOptions.filter((skill) => {
        return tutorDetail?.skills_present?.includes(skill.value)
    })
    return (
        <div>
            <h5 className="text-primary">Enrollment Form</h5>
            <div className="form-outline mb-4">
                <label htmlFor="subject" className="form-label">
                    Subject
                </label>
                <select name="subject" value={subject} id="subject" className="form-control"
                    onChange={(e) => setSubject(e.target.value)}
                >
                    <option value="">Select one subject</option>
                    {filteredSkills.map((item) => {
                        return (
                            <option key={"skill-" + item.value} value={item.value}>{item.label}</option>
                        )
                    })}
                </select>
            </div>
            <div className="form-outline mb-4">
                <label htmlFor="doc" className="form-label">
                    Class Start Date
                </label>
                <input
                    id="doc"

                    type="date"
                    value={classStartDate}
                    onChange={(e) => {

                        setClassStartDate(e.target.value)
                    }}

                    className={"form-control"}
                    max={new Date()}
                />

            </div>
            <div>
                <button
                    onClick={() => handleEnrollmentSubmit(subject, classStartDate)}
                    className="btn btn-primary">
                    Submit
                </button>
                <button
                    onClick={() => onCancelClick()}
                    className="btn btn-secondary ml-2">
                    Cancel
                </button>
            </div>
            <ResponseMessage

                response={responseMessage} />
        </div>
    )
}
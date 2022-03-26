import React, { useState, useEffect } from "react";
import catImage from "../Search/catImage.jpeg"
import PersonalDescription from "./PersonalDescription";
import { useNavigate, useLocation, Link } from 'react-router-dom';
import Navbar from "../../Navbar/FuldemyNavbar";
import defaultImage from "../../assets/images/default.png"
import { getToken, isLoggedIn } from "../../utils/utilityFunctions";
import TutorReviewForm from "../TutorReview/TutorReviewForm"
import EnrollmentForm from "./EnrollmentForm"
import Timetable from "./Timetable"
import axios from "axios"

export default function TutorDetail() {
    const navigate = useNavigate();
    const [skillOptions, setSkillOptions] = useState([])
    const [showEnrollmentForm, setShowEnrollmentForm] = useState(false)
    const [profileData, setProfileData] = useState(null)
    const [responseMessage, setResponseMessage] = useState("")
    const location = useLocation()
    const [reviewsList, setReviewList] = useState([])


    useEffect(() => {
        fetchSkills()
        fetchLoggedInUserProfile()
        getReviewByTitorId()
    }, [])

    const getReviewByTitorId = () => {
        const token = getToken()
        if (token) {
            const tutorId = tutorDetail.id
            const baseEndPoint = process.env.REACT_APP_API_END_POINT
            const apiEndPoint = baseEndPoint + "/api/reviews/getByTutor/" + tutorId

            axios.get(apiEndPoint, {
                headers: {
                    Authorization: "Bearer " + token
                }
            })
                .then(res => {

                    setReviewList(res.data)
                })
                .catch((err) => {
                    setReviewList([])

                })
        }

    }

    const fetchSkills = () => {
        const baseEndPoint = process.env.REACT_APP_API_END_POINT
        const apiEndPoint = baseEndPoint + "/api/skills"
        axios.get(apiEndPoint, {
        })
            .then(res => {

                if (res.data) {

                    let formattedData = res.data.map((i) => {
                        return {
                            label: i.skill_name,
                            value: i.id
                        }
                    })
                    setSkillOptions(formattedData)

                }
            })
            .catch((err) => {

            })
    }

    const fetchLoggedInUserProfile = () => {
        const token = getToken()
        if (token) {
            const baseEndPoint = process.env.REACT_APP_API_END_POINT
            const apiEndPoint = baseEndPoint + "/api/user/detail"

            axios.get(apiEndPoint, {
                headers: {
                    Authorization: "Bearer " + token
                }
            })
                .then(res => {

                    setProfileData(res.data)
                })
                .catch((err) => {
                    // setErrMsg("Error")
                    setProfileData(null)

                })
        }

    }

    const handleEnrollmentSubmit = (subjectId, classStartDate) => {
        if (subjectId) {
            const token = getToken()
            const reqData = {
                tutor_id: tutorDetail.id,
                student_id: profileData.data.id,
                skill_id: subjectId,
                class_id: tutorDetail.id + "_" + profileData.data.id,
                class_start_date: classStartDate
            }
            const baseEndPoint = process.env.REACT_APP_API_END_POINT
            const apiEndPoint = baseEndPoint + "/api/reviews"
            axios
                .post(apiEndPoint, reqData, {
                    headers: {
                        Authorization: "Bearer " + token
                    },
                })
                .then((res) => {
                    console.log(res);

                    console.log(res.data)
                    if (res.data.status === "success") {
                        setResponseMessage("Success")
                        
                    } else {
                        setResponseMessage("Error")

                    }

                    setTimeout(() => {
                        setResponseMessage("")
                    }, 3000)

                })
                .catch((err) => {
                    setResponseMessage(
                        "error"

                    )

                    //setResponseData("Error")
                });
        } else {
            setResponseMessage("Select Subject")
            setTimeout(() => {
                setResponseMessage("")
            }, 3000)
        }
    }

    const tutorDetail = location.state ? location.state.tutorDetail : null
    const profile_Image = tutorDetail ? tutorDetail.profile_pic :
        tutorDetail.profile_pic ? defaultImage : defaultImage
    return (
        <>
            <Navbar />
            <div className="mt-5 container">
                <div className="d-flex flex-row-reverse mb-2">
                    <button
                        onClick={() => navigate(-1)}
                        className="btn btn-sm btn-secondary">
                        Back
                    </button>
                </div>
                <div className="card p-5">

                    <div className="row">
                        <div className="col-3">
                            <img src={profile_Image} className="col-md-12 mb-2" />
                        </div>
                        <div className="col-9">
                            <PersonalDescription tutorDetail={tutorDetail} />
                        </div>
                    </div>

                    <div class="d-flex flex-row-reverse mt-2">
                        {isLoggedIn() ?
                            <>
                                <div className="mr-2">
                                    <button
                                        onClick={() => {
                                            navigate("/messages", { state: { tutorDetail } })
                                        }}
                                        style={{ marginLeft: "20px" }}
                                        className="btn btn-primary"
                                    >Message</button>
                                </div>
                                <div className="ml-2">
                                    <button className="btn btn-primary"
                                        onClick={() => setShowEnrollmentForm(true)}
                                    >Enroll</button>
                                </div>
                                <div className="mr-2">
                                    <button
                                        onClick={() => {
                                            navigate("/timetable", { state: { tutorDetail } })
                                        }}
                                        style={{ marginLeft: "20px" }}
                                        className="btn btn-primary"
                                    >View Timetable</button>
                                </div>

                            

                            </> :
                            <Link className="btn btn-primary"
                                to="/login"
                            >Login to enroll</Link>

                        }

                    </div>
                    {!!showEnrollmentForm && <EnrollmentForm skillOptions={skillOptions}
                        onCancelClick={() => setShowEnrollmentForm(false)}
                        tutorDetail={tutorDetail}
                        handleEnrollmentSubmit={handleEnrollmentSubmit}
                        responseMessage={responseMessage}
                    />
                    }

                </div>

                <TutorReviewForm
                    tutorDetail={tutorDetail}
                    profileData={profileData}
                    reviewsList={reviewsList}
                    onReviewSubmitSuccess={() => getReviewByTitorId()}
                />
            </div>
        </>
    )
}
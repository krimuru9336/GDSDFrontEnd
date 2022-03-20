import React, { useState, useEffect } from "react";
import ResponseMessage from "../common/ResponseMessage";
import axios from "axios"
import Search from "../components/Search/Search";
import TutorsOfWeek from "../components/Tutor/TutorsOfWeek";
import MostReviewedTutors from "../components/Tutor/MostReviewedTutors";
import SearchResults from "../components/Tutor/SearchResults";
import { getToken } from "../utils/utilityFunctions";
import Navbar from "../Navbar/FuldemyNavbar";
import TutorRating from "../components/TutorRanking/TutorRanking";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const [errMsg, setErrMsg] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [searchSubmit, setSearchSubmit] = useState(false)
  const [allTutors, setAllTutorResults] = useState([])
  const [tutorsRankingList, setTutorsRankingList] = useState([])


  useEffect(() => {
    fetchAPIData()
  }, [])

  const fetchAPIData = () => {

    const baseEndPoint = process.env.REACT_APP_API_END_POINT
    const apiEndPoint = baseEndPoint + "/api/tutor"
    const apiEndPointReview = baseEndPoint + "/api/reviews"
    setIsLoading(true)
    axios.get(apiEndPoint, {

    })
      .then(async (res) => {
        setIsLoading(false)
        setAllTutorResults(res.data)
        // fetch all review




      })
      .catch((err) => {
        setErrMsg("Error")
        setIsLoading(false)
      })

    axios.get(apiEndPointReview, {}).then((revRes) => {
      const allReviewsList = revRes.data
      if (allReviewsList && allTutors) {

        console.log(allReviewsList)
        let tutorListWithRating = allTutors.map((tutor) => {
          const reviewForCurrentTutor = allReviewsList.filter((rev) => rev.tutor_id === tutor.id)
          console.log("here", reviewForCurrentTutor)
        })

      }
    })



  }

  const onFormSubmit = (e) => {
    setSearchTerm(e.target.value)
    setSearchSubmit(e.target.value ? true : false)
    const baseEndPoint = process.env.REACT_APP_API_END_POINT
    const apiEndPoint = baseEndPoint + "/api/tutor/?search=" + e.target.value
    setIsLoading(true)
    axios.get(apiEndPoint)
      .then(res => {
        setIsLoading(false)
        setSearchResults(res.data)
        setErrMsg(null)
      }).catch(err => {
        setIsLoading(false)
        setSearchResults([])
        setErrMsg(err.response ? err.response.message ?
          err.response.message : "Error" : "Error")
      })
  }

  const categories = [
    {
      label: "Math",
      value: "Math"
    },
    {
      label: "Science",
      value: "Science"
    },
    {
      label: "IT",
      value: "IT"
    },
    {
      label: "Health Science and Biology",
      value: "Health"
    },
    {
      label: "Civil Engineering",
      value: "Civil Engineering"
    },
  ]

  return (
    <>
      <Navbar />
      <div>
        {/* 
<h2>Welcome To Fuldemy</h2> */}

        <div className="mt-5 container">
          <div className="card p-5">
            <form className="form-inline" >
              <div className="row">
                <div className="form-group col-md-3 col-sm-12">
                  <select name="category" className="form-control">
                    <option value="">Category</option>
                    {categories.map((i, index) => {
                      return <option key={index + "-cat"} value={i.value}>{i.label}</option>
                    })}
                  </select>

                </div>

                <div className="form-group col-md-3 col-sm-12">

                  <input type="text" className="form-control"
                    value={searchTerm}
                    onChange={(e) =>
                      onFormSubmit(e)
                    }
                    id="inputPassword2" placeholder="Search..." />


                </div>
              </div>
            </form>

            {searchSubmit ? <SearchResults searchResults={searchResults} /> :
              <>
                <TutorsOfWeek tutors={allTutors} />
                {/*  {!isLoading &&
    <Search searchResults={searchResults} /> } */}



                <MostReviewedTutors tutors={allTutors} />
                <TutorRating tutors={allTutors} />
              </>
            }





            <ResponseMessage response={errMsg} />
          </div>
        </div>
      </div>
    </>
  )
}
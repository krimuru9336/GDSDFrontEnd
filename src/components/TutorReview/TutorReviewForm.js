import react, { useState } from "react";
import ReactStars from "react-rating-stars-component";

export default function Review() {
    const [comments, ssetComments] = useState([
        {
            commentText: "comment one",
            rating: 3
        }
    ])
    const [reviewText, setReviewtext] = useState("")
    const [ratingGiven, setRatinggiven] = useState(0)
    const [feedbackText, setFeedbacktext] = useState("")

    // useEffect(() => {
    //     const token = getToken()
    //     if (token) {
    //         const baseEndPoint = process.env.REACT_APP_API_END_POINT
    //         const apiEndPoint = baseEndPoint + "/api/review/"

    //         axios.get(apiEndPoint, {
    //             headers: {
    //                 Authorization: "Bearer " + token
    //             }
    //         })
    //             .then(res => {

    //                 setTutorProfile(res.data)
    //             })
    //             .catch((err) => {
    //                 // setErrMsg("Error")
    //                 setTutorProfile(null)

    //             })
    //     }
    // }, [])



    const onRatingChange = (rateValue) => {
        console.log("Rating is ", rateValue)
        setRatinggiven(rateValue)
    }

    const onReviewSubmit = () => {
        // let newComments = [...comments, {
        //     commentText: reviewText,
        //     rating: ratingGiven
        // }]
        // ssetComments(newComments)
    }

    return (
        <div>
            <div>
                {/* //rating, feedback box , comment box and submit div */}

                {/* Rating */}

                <div class="height-100 container d-flex justify-content-end align-items-end">
                    <div class="p-3">
                        <div class="d-flex justify-content-between align-items-center">
                            {/* <div class="ratings"> <i class="fa fa-star rating-color"></i> <i class="fa fa-star rating-color"></i> <i class="fa fa-star rating-color"></i> <i class="fa fa-star rating-color"></i> <i class="fa fa-star"></i> </div> */}
                            {/* <h5 class="review-count">12 Reviews</h5> */}
                            <ReactStars count={5}
                                size={24}
                                onChange={onRatingChange}
                                emptyIcon={<i className="far fa-star"></i>}
                                halfIcon={<i className="fa fa=star-half-alt"></i>}
                                fullIcon={<i className="fa fa-star"></i>}
                            />

                        </div>

                    </div>
                </div>

                {/* Review Box */}
                <div class="form-group">
                    <form>
                        <label for="exampleFormControlTextarea1">Review</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="4"
                            value={reviewText}
                            onChange={(e) => setReviewtext(e.target.value)}

                        ></textarea>
                    </form>
                </div>

                {/* Feedback Box */}

                <div class="form-group">

                    <label for="exampleFormControlTextarea1">Feedback</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="4"
                        value={feedbackText}
                        onChange={(e) => setFeedbacktext(e.target.value)}

                    ></textarea>

                </div>

                {/* Submit */}
                <div className="d-flex justify-content-end mt-2">

                    <button type="button" class="btn btn-secondary"
                        onClick={() => onReviewSubmit()}
                    >Submit</button>


                </div>


            </div>

            <div>
                {/* //previous rating, filtering */}

                {/* filtering */}
                {/* <div>//filtering</div> */}

                {/* previous ratings */}
                <div>
                    <ul class="list-group">
                        {comments.map((i, index) => {
                            return (
                                <li class="list-group-item"
                                    key={"comment_" + i.index}

                                >{i.commentText}
                                    {[...Array(i.rating)].map((r) => {
                                        return <i className="fa fa-star"></i>
                                    })}
                                </li>
                            )
                        })}


                    </ul>
                </div>
            </div>
        </div>
    )
}
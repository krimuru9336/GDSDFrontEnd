import react from "react";
import ReactStars from "react-rating-stars-component";

export default function Review() {

    const onRatingChange = (rateValue) => {
        console.log("Rating is ", rateValue)
    }

    return (
        <div>
            <div>
                {/* //rating, box and submit div */}

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

                {/* Box */}
                <div class="form-group">
                    <form>
                        <label for="exampleFormControlTextarea1">Review</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
                    </form>
                </div>

                {/* Submit */}
                <div className="d-flex justify-content-end mt-2">

                    <button type="button" class="btn btn-secondary">Submit</button>


                </div>


            </div>

            <div>
                {/* //previous rating, filtering */}

                {/* filtering */}
                <div>//filtering</div>

                {/* previous ratings */}
                <div>
                    <ul class="list-group">
                        <li class="list-group-item active" aria-current="true">Coment one</li>
                        <li class="list-group-item">Coment two</li>
                        <li class="list-group-item">Coment three</li>

                    </ul>
                </div>
            </div>
        </div>
    )
}
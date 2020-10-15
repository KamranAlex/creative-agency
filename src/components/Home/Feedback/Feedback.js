import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Feedback.css";
import loading from "../../../images/loading.gif";

const Feedback = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);
  return (
    <div className='container feedback-section'>
      <h4 className='text-center feedback-head'>
        {" "}
        Clients <span>Feedback</span>{" "}
      </h4>

      <div className='row card-row mt-5'>
        {reviews.length < 1 ? (
          <div className='text-center'>
            <img src={loading} alt='' />
            <div className='text-center'>
              <small className='text-danger'>Loading, Please wait...</small>
            </div>
          </div>
        ) : (
          reviews.slice(0, 6).map((review) => {
            return (
              <div className='col-md-3 feedback-card'>
                <div className='client-info d-flex'>
                  <img
                    className='img-fluid'
                    src={`data:image/png;base64,${review.image.img}`}
                    alt=''
                  />
                  <div className='client-text'>
                    <h6>{review.name}</h6>
                    <p>{review.designation}</p>
                  </div>
                </div>
                <div className='feedback-text'>
                  <p>{review.comment}</p>
                </div>
              </div>
            );
          })
        )}
      </div>
      <div className='text-center mt-2'>
        <Link to={"/allReviews"}>
          <strong className='text-info'>View All Reviews..</strong>
        </Link>
      </div>
    </div>
  );
};

export default Feedback;

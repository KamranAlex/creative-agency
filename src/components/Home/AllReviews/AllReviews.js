import React, { useEffect, useState } from "react";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import "./AllReviews.css";
import loading from "../../../images/loading.gif";

const AllReviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);
  return (
    <div>
      <Navbar></Navbar>
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
                <strong className='text-danger'>Loading, Please wait...</strong>
              </div>
            </div>
          ) : (
            reviews.map((review) => {
              return (
                <div className='col-md-3 all-feedback-card'>
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
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AllReviews;

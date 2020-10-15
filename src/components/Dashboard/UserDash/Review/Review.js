import { faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Sidebar from "../../Sidebar/Sidebar";

const Review = () => {
  const handleBlur = (e) => {};
  const handleReviewSubmit = () => {};
  return (
    <div className='row'>
      <Sidebar></Sidebar>
      <div className='col-md-10 main-col'>
        <div className='desh-head'>
          <h4 className='pt-4 pl-5'>Review</h4>
        </div>
        <div className='review-form col-md-6 ml-3 px-5 py-3'>
          <form action='' onSubmit={handleReviewSubmit}>
            <div className='form-group'>
              <label htmlFor='Name'>Name</label>
              <input
                onBlur={handleBlur}
                type='text'
                name='name'
                className='form-control'
                placeholder='Your name/Company Name'
                required
              />
            </div>
            <div className='form-group'>
              <label htmlFor='Designation'>Designation</label>
              <input
                onBlur={handleBlur}
                type='text'
                name='designation'
                className='form-control'
                placeholder='Your designation'
                required
              />
            </div>

            <div className='form-group'>
              <label htmlFor='Comment'>Comment</label>
              <textarea
                onBlur={handleBlur}
                name='details'
                className='form-control'
                id=''
                cols='10'
                rows='4'
                placeholder='Text here...'
                required
              ></textarea>
            </div>

            <div className='form-group'>
              <label htmlFor='Image'>Image</label>
              <div className='upload-btn-wrapper'>
                <button class='upload-btn'>
                  Upload Your Image{" "}
                  <FontAwesomeIcon icon={faCloudUploadAlt}></FontAwesomeIcon>
                </button>
                <input type='file' name='file' />
              </div>
            </div>
            <div className='form-group'>
              <button type='submit' className='footer-btn'>
                {" "}
                Send Review{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Review;

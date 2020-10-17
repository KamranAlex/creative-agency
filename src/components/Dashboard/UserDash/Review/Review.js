import { faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Sidebar from "../../Sidebar/Sidebar";

const Review = () => {
  const history = useHistory();
  const [reviewInfo, setReviewInfo] = useState({});
  const [file, setFile] = useState(null);
  const handleBlur = (e) => {
    const newInfo = { ...reviewInfo };
    newInfo[e.target.name] = e.target.value;
    setReviewInfo(newInfo);
    console.log(newInfo);
  };

  const handleFileChange = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
  };

  const handleReviewSubmit = (e) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", reviewInfo.name);
    formData.append("designation", reviewInfo.designation);
    formData.append("comment", reviewInfo.comment);
    fetch("https://arcane-meadow-55145.herokuapp.com/addReview", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        history.push("/dashboard/myServices");
      })
      .catch((error) => {
        console.error(error);
      });
    e.preventDefault();
  };
  return (
    <div className='row'>
      <Sidebar></Sidebar>
      <div className='col-md-10 col-sm-10  main-col'>
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
                name='comment'
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
                <input
                  onChange={handleFileChange}
                  type='file'
                  name='file'
                  required
                />
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

import React, { useContext } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { UserContext } from "../../App";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import googleICON from "../../images/logos/googleICON.png";
import logo from "../../images/logos/logo.png";
import "./Login.css";

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const handleGoogleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        const { displayName, email } = result.user;
        const signedInUser = { name: displayName, email };
        setLoggedInUser(signedInUser);
        storeAuthToken();
      })
      .catch(function (error) {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  const storeAuthToken = () => {
    firebase
      .auth()
      .currentUser.getIdToken(true)
      .then(function (idToken) {
        sessionStorage.setItem("token", idToken);
        history.replace(from);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className='container text-center mt-3'>
      <img className='logoIMG' src={logo} alt='' />
      <div className='login-container'>
        <div className='login-text'>
          <h1>Log In</h1>
        </div>
        <button
          onClick={handleGoogleSignIn}
          className='google-login d-flex justify-content-between '
        >
          <div className='social-icon '>
            <img src={googleICON} alt='' />
          </div>
          <div className='social-text '>
            <p> Continue With Google</p>
          </div>
        </button>
        <p>
          Dont have an Account?{" "}
          <span className='text-info'>
            <Link to='/login'>Create an account</Link>
          </span>{" "}
        </p>
      </div>
    </div>
  );
};

export default Login;

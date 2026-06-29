import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Validate from "./util/Validate";
import { auth } from "./util/firebase";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const formTitle = isSignUp ? "Sign Up" : "Sign In";
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSignUp = () => {
    setIsSignUp(true);
  };
  const firstName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  //  console.log("email,password",email.current.value,password.current.value)
  const submitForm = () => {
    console.log("email,password", email.current.value, password);
    const message = Validate(email.current.value, password.current.value);
    console.log("message", message);
    setError(message);
    if (error) return;

    if (isSignUp) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then(async (userCredential) => {
          // Signed up
          const user = userCredential.user;
          await updateProfile(userCredential.user, {
            displayName: firstName.current.value,
          });
          console.log(user);
          // After successful sign-up, switch to sign-in view so the user can log in
          setIsSignUp(false);
          navigate("/");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode + "" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // // Signed in
          // const user = userCredential.user;
        navigate("/browse");

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode + "" + errorMessage);
        });
    }
  };

  return (
    <div className="login-page">
      <Header />
      <img
        className="bg-logo"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/8027eb3f-343a-499d-9892-e683c12e3cb1/web/IN-en-20260608-TRIFECTA-perspective_d70af879-e407-4aee-8615-4c82210065d5_large.jpg"
        alt="Netflix Logo"
      />
      <div className="login-form">
        <form onSubmit={(e) => e.preventDefault()}>
          <h1>{formTitle}</h1>

          {isSignUp && (
            <div className="input-container">
              <input
                ref={firstName}
                type="text"
                placeholder="First Name"
                className="Input-field"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="Input-field"
              />
            </div>
          )}

          <div className="input-container">
            <input
              ref={email}
              type="text"
              placeholder="Email Id"
              className="Input-field"
            />
            <input
              ref={password}
              type="password"
              placeholder="Password"
              className="Input-field"
            />
            <p>{error}</p>
            <button type="button" className="login-button" onClick={submitForm}>
              {formTitle}
            </button>
          </div>
          <div>
            <p>
              {isSignUp ? "Already have an account?" : "New to Netflix?"}

              <span className="sign-up-link" onClick={handleSignUp}>
                {isSignUp ? "Sign In " : "Sign up now."}
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

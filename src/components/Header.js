import React from "react";
import "../App.css";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import { auth } from "./util/firebase";
import { signOut } from "firebase/auth";


const Header = () => {
const navigate = useNavigate();
const user = useSelector((store) => store.user);

  const logOut = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  }
  return (
    <div className="Header-Content">
      <div>
        <img
          className="netflix-logo"
          src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-05-14/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="Netflix Logo"
          width="200"
        />
      </div>
      {user && (
      <div className="user-section">
         <img 
        src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
        alt="User"
        className="user-avatar"
        width="60"
      />
      <button className="signout-btn" onClick={logOut}>Sign out</button>
      </div>
      )}
     
    </div>
  );
};

export default Header;

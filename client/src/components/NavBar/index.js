import React from "react";
import { useAuth0 } from "../../react-auth0-wrapper";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import Image from "../userImage"
import Name from "../userName"
import "./nav.css";


const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();
  if (isAuthenticated) {
    console.log(user)
  }

  

  return (
    <div className="navigation">
      <h6>SwiftCrag</h6>
      {!isAuthenticated && (
        <div
          onClick={() =>
            loginWithRedirect({})
          }
        >
          <button className="login">Login</button>
        </div>
      )}
         
      {isAuthenticated && <div className="icon icon-enter" onClick={() => logout()}><Image /></div>}
      {isAuthenticated && (
        <>
  
      <span>
        <ul className="nav">
          <li className="nav-li"><Name/></li>
          <li className="nav-li">
        <Link to="/home">Home</Link>&nbsp;
        </li>
        <li className="nav-li">
        <Link to="/profile">Profile</Link>
        </li>
        <li className="nav-li">
          <Link to="/community">Community</Link>
        </li>
        <li className="nav-li">
          <Link to="/cragsearch">Crag Search</Link>
        </li>
        {/* <li className="nav-li">
          <Link to="/belaypartner">Belay Partner</Link>
        </li> */}
        
        {/* <li className="nav-li">
          <Link to="/meetup">Meetup</Link>
        </li> */}
        {/* <li className="nav-li">
          <Link to="/augrealroutes">AR</Link>
        </li> */}
        </ul>
      </span>
      </>
    )}
    </div>
  );
};

export default NavBar;

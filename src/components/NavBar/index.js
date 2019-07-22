import React from "react";
import { useAuth0 } from "../../react-auth0-wrapper";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import "./nav.css";

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div className="navigation">
      {!isAuthenticated && (
        <div className="icon icon-enter"
          onClick={() =>
            loginWithRedirect({})
          }
        >
          <FontAwesomeIcon icon={faUser} />
        </div>
      )}

      {isAuthenticated && <div className="icon icon-enter" onClick={() => logout()}><FontAwesomeIcon icon={faUser} /></div>}
      {isAuthenticated && (
      <span>
        <ul className="nav">
        <li className="nav-li">
        <Link to="/">Home</Link>&nbsp;
        </li>
        <li className="nav-li">
          <Link to="/cragsearch">Crag Search</Link>
        </li>
        <li className="nav-li">
          <Link to="/belaypartner">Belay Partner</Link>
        </li>
        <li className="nav-li">
          <Link to="/community">Community</Link>
        </li>
        <li className="nav-li">
          <Link to="/meetup">Meetup</Link>
        </li>
        <li className="nav-li">
          <Link to="/augrealroutes">AR</Link>
        </li>
        <li className="nav-li">
        <Link to="/profile">Profile</Link>
        </li>
        </ul>
      </span>
    )}
    </div>
  );
};

export default NavBar;
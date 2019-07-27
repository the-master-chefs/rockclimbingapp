import React from "react";
import { useAuth0 } from "../react-auth0-wrapper";

const Image = () => {
  const { loading, user } = useAuth0();

  if (loading || !user) {
    return "Loading...";
  }

  return (
    <>
      <img src={user.picture} alt="Profile" className="profile"/>
    </>
  );
};

export default Image;
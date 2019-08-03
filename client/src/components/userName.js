import React from "react";
import { useAuth0 } from "../react-auth0-wrapper";

const Name = () => {
  const { loading, user } = useAuth0();

  if (loading || !user) {
    return "Loading...";
  }


  return (
    <>
      <p>{user.nickname}</p>

    </>
  );
};

export default Name;
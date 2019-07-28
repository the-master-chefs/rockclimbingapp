import React from "react";
import { useAuth0 } from "../react-auth0-wrapper";

const Name = () => {
  const { loading, user } = useAuth0();

  if (loading || !user) {
    return "Loading...";
  }
  console.log(user);

  return (
    <>
      <h2>{user.nickname}</h2>

    </>
  );
};

export default Name;
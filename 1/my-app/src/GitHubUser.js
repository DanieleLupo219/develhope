import React, { useEffect, useState } from "react";
import useGitHubUser from "./useGitHubUser";

function GitHubUser({ username }) {
  const data = useGitHubUser(username);

  return <div>{data && <h1>{data.name}</h1>}</div>;
}

export default GitHubUser;

import React, { useEffect, useState } from "react";
import useGitHubUser from "./useGitHubUser";

function GitHubUser({ username }) {
  const [fetchUser, data, error, loading] = useGitHubUser(username);

  return (
    <div>
      {loading && <h1>Loading...</h1>}
      {error && <h1>{error.message}</h1>}
      {data?.name && <h1>{data.name}</h1>}
    </div>
  );
}

export default GitHubUser;

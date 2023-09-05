import { useEffect, useState } from "react";

function useGitHubUser(username) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, [username]);

  return data;
}

export default useGitHubUser;

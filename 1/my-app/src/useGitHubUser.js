import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

function useSearchUser(username) {
  const { data, error, mutate } = useSWR(
    username && `https://api.github.com/users/${username}`,
    fetcher
  );

  function handleRefresh() {
    mutate();

    console.log(data);
  }

  return {
    data,
    error,
    onRefresh: handleRefresh,
  };
}

function useGitHubUser(username) {
  const { data, error, onRefresh } = useSearchUser(username);

  return {
    data: data,
    error: error,
    onRefresh: onRefresh,
  };
}

export default useGitHubUser;

import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

function useGetGitHubUser(username) {
  const { data, error } = useSWR(
    username && `https://api.github.com/users/${username}`,
    fetcher
  );

  return {
    data: data,
    error: error,
  };
}
export default useGetGitHubUser;

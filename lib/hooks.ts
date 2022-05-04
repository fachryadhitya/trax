import useSWR from "swr";
import fetcher from "./fetcher";

export const useMe = () => {
  const { data, error } = useSWR("/me", fetcher);

  return {
    user: data,
    isLoading: !data && !error,
    isError: error,
  };
};

type Playlist = {
    id: number,
    name: string,
}

export const usePlaylists = () => {
  const { data, error } = useSWR("/playlists", fetcher);

  return {
    playlists: data as Playlist[] || [],
    isLoading: !data && !error,
    isError: error,
  };
};

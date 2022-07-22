import axios from "axios";
import { useEffect, useState } from "react";
import {
  api_base_url,
  api_host,
  api_key,
} from "../../components/GameList/constants";
import { Filter, Game, Response } from "../../types/types";

const useFetch = (params: Filter): Response => {
  const [games, setGames] = useState<Game[]>([]);
  const { platform, genre, tag, sortBy } = params;

  useEffect(() => {
    axios
      .get("/games", {
        baseURL: `${api_base_url}`,
        headers: {
          "x-rapidapi-key": api_key as string,
          "x-rapidapi-host": api_host as string,
        },
        params: {
          platform,
          category: genre,
          tag,
          "sort-by": sortBy,
        },
      })
      .then((res) => setGames(res.data));
  }, [platform, genre, tag, sortBy]);

  return {
    games,
  };
};

export default useFetch;

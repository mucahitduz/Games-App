import axios from "axios";
import { useEffect, useState } from "react";
import {
  API_BASE_URL,
  API_HOST,
  API_KEY,
} from "../../components/GameList/constants";
import { Filter, Game, Response } from "../../types/types";

const useFetch = (params: Filter): Response => {
  const [games, setGames] = useState<Game[]>([]);
  const { platform, genre, tag, sortBy } = params;

  useEffect(() => {
    axios
      .get("/games", {
        baseURL: `${API_BASE_URL}`,
        headers: {
          "x-rapidapi-key": API_KEY,
          "x-rapidapi-host": API_HOST,
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

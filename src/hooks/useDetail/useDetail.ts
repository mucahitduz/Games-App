import { useState, useEffect } from "react";
import axios from "axios";
import {
  api_base_url,
  api_host,
  api_key,
} from "../../components/GameList/constants";
import { GameDetailType } from "../../types/types";

interface Response {
  details: GameDetailType | undefined;
}

const useDetail = (gameId: string): Response => {
  const [details, setDetails] = useState<GameDetailType>();

  useEffect(() => {
    axios
      .get(`/game`, {
        baseURL: `${api_base_url}`,
        headers: {
          "x-rapidapi-key": api_key as string,
          "x-rapidapi-host": api_host as string,
        },
        params: {
          id: gameId,
        },
      })
      .then((res) => setDetails(res.data));
  }, [gameId]);

  return {
    details,
  };
};

export default useDetail;

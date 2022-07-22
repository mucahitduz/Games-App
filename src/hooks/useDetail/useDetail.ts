import { useState, useEffect } from "react";
import axios from "axios";
import { API_HOST, API_KEY } from "../../components/GameList/constants";
import { GameDetailType } from "../../types/types";

interface Response {
  details: GameDetailType | undefined;
}

const useDetail = (gameId: string): Response => {
  const [details, setDetails] = useState<GameDetailType>();

  useEffect(() => {
    axios
      .get(`/game`, {
        baseURL: `https://${API_HOST}/api`,
        headers: {
          "x-rapidapi-key": API_KEY,
          "x-rapidapi-host": API_HOST,
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

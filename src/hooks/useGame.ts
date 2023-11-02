import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { Game } from "./useGames";

interface GameDetail{
    id: number;
    slug: string;
    name: string;
    description_raw: string;
}

const apiClient = new APIClient<GameDetail>("/games")

const useGame = (slug?: string) => useQuery<GameDetail, Error, GameDetail>({
    queryKey: ["game", slug],
    queryFn: () => apiClient.getGame(slug)
})

export default useGame

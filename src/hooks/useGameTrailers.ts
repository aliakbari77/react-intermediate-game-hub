import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";

interface GameTrailer{
    id: number;
    name: string;
    preview: string;
    data: {
        480: string;
        max: string
    };
}

interface FetchTrailer{
    count: number;
    results: GameTrailer[]
}

const apiClient = new APIClient<FetchTrailer>("/games")

const useGameTrailers = (id: number | undefined) => {
    return useQuery({
        queryKey: ["gameTrailer", id],
        queryFn: () => apiClient.getMovie(id)
    })
} 

export default useGameTrailers

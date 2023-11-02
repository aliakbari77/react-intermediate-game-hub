import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import ms from 'ms'
import { FetchResponse } from "../services/api-client";
import APIClient from "../services/api-client";
import { Platform } from "./usePlatforms";
import useGameQeuryStore from "../store";

const apiClient = new APIClient<Game>("/games");

export interface Game {
	id: number;
	slug: string;
	name: string;
	background_image: string;
	parent_platforms: { platform: Platform }[];
	metacritic: number;
	rating_top: number;
}

const useGames = () => {
	const gameQuery = useGameQeuryStore(s => s.gameQuery)
	return useInfiniteQuery<FetchResponse<Game>, Error>({
		queryKey: ["games", gameQuery],
		queryFn: ({ pageParam = 1 }) =>
			apiClient.getAll({
				params: {
					genres: gameQuery.genreId,
					parent_platforms: gameQuery.platformId,
					ordering: gameQuery.sortOrder,
					search: gameQuery.searchText,
					page: pageParam,
				},
			}),
		getNextPageParam: (lastPage, allPages) => {
			return lastPage.next ? allPages.length + 1 : undefined;
		},
		staleTime: ms('24h'), //24h
	});
}


export default useGames;

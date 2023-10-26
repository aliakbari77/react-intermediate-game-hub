import { create } from "zustand";
import {Genre} from "./useGenres";
import {Platform} from "./usePlatforms";

interface GameQueryStore {
	genreId?: number;
	platformId?: number;
	sortOrder: string;
	searchText: string;
    search: (searchValue: string) => void;
    selectedGenre: (genre: Genre) => void;
    selectPlatform: (platform: Platform) => void;
    selectSortOrder: (sortOrder: string) => void;
}

const useGameQueryStore = create<GameQueryStore>(set => ({
    genreId: undefined,
    platformId: undefined,
    sortOrder: '',
    searchText: '',
    search: (searchValue: string) => set(() => ({searchText: searchValue})),
    selectedGenre: (genre: Genre) => set(() => ({genreId: genre.id})),
    selectPlatform: (platform: Platform) => set(store => ({platformId: platform.id})),
    selectSortOrder: (sortOrder: string) => set(() => ({sortOrder: sortOrder}))
}))

export default useGameQueryStore
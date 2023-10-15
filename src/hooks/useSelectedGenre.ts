import useGenres from "./useGenres";

const useSelectedGenre = (genreId?: number) => {
    const {data: genres} = useGenres()

    return genres?.results.find(g => g.id === genreId)
}

export  default useSelectedGenre
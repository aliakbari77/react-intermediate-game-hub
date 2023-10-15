import usePlatforms from "./usePlatforms";

const useSelectedPlatform = (genreId?: number) => {
    const {data: platforms} = usePlatforms()

    return platforms?.results.find(g => g.id === genreId)
}

export default useSelectedPlatform
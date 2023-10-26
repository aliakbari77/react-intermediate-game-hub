import { Heading } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";
import useGameQeuryStore from "../store";

const GameHeading = () => {
  const genreId = useGameQeuryStore((s) => s.gameQuery.genreId);
  const platformId = useGameQeuryStore((s) => s.gameQuery.platformId);

  const genre = useGenre(genreId);
  const platform = usePlatform(platformId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;

import { AspectRatio, SimpleGrid, Image } from "@chakra-ui/react";
import useScreenshots from "../hooks/useScreenshots";

interface Props {
  gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
  const { data, isLoading, error } = useScreenshots(gameId);

  if (isLoading) return null;

  if (error) throw error;

  return (
    <SimpleGrid columns={{ sm: 1, md: 2 }} gap={2} marginY={4}>
      {data?.results.map((s) => (
        <AspectRatio>
          <Image src={s.image} />
        </AspectRatio>
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshots;

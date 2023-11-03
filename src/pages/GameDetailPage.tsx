import {
  AspectRatio,
  Heading,
  SimpleGrid,
  Spinner,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router-dom";
import CriticScore from "../components/CriticScore";
import DefinitionItem from "../components/DefinitionItem";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import useGame from "../hooks/useGame";
import useGameTrailers from "../hooks/useGameTrailers";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);
  const { data } = useGameTrailers(game?.id);

  console.log(data?.results);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <>
      <Heading>{game.name}</Heading>
      <ExpandableText>{game.description_raw}</ExpandableText>
      <GameAttributes game={game} />
      <AspectRatio maxW="560px" ratio={1}>
        <iframe src={data?.results[0].data.max}  allowFullScreen/>
      </AspectRatio>
    </>
  );
};

export default GameDetailPage;

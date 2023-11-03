import {
  Grid,
  GridItem,
  Heading,
  ListItem,
  Spinner,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router-dom";
import CriticScore from "../components/CriticScore";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import useGame from "../hooks/useGame";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <>
      <Heading>{game.name}</Heading>
      <ExpandableText>{game.description_raw}</ExpandableText>
      <Grid templateRows="repeat(2, 1fr)" templateColumns="repeat(2, 1fr)">
        <GridItem>
          <GameAttributes header="Platforms">
            <ul style={{ listStyle: "none" }}>
              {game.parent_platforms.map((p) => (
                <li>{p.platform.name}</li>
              ))}
            </ul>
          </GameAttributes>
        </GridItem>
        <GridItem>
          <GameAttributes header="Metascore">
            <CriticScore score={game.metacritic} />
          </GameAttributes>
        </GridItem>
        <GridItem>
          <GameAttributes header="Metascore">
            <CriticScore score={game.metacritic} />
          </GameAttributes>
        </GridItem>
        <GridItem>
          <GameAttributes header="Platforms">
            <ul style={{ listStyle: "none" }}>
              {game.parent_platforms.map((p) => (
                <li>{p.platform.name}</li>
              ))}
            </ul>
          </GameAttributes>
        </GridItem>
      </Grid>
    </>
  );
};

export default GameDetailPage;

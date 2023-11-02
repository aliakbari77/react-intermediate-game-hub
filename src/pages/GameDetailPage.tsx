import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";

const GameDetailPage = () => {
  const params = useParams();
  const {data: game} = useGame(params.slug);

  console.log(game?.name);
  return (
    <>
      <Heading>{game?.name}</Heading>
      <Box>{game?.description_raw}</Box>
    </>
  );
};

export default GameDetailPage;

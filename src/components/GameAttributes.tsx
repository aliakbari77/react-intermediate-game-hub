import { Heading } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { Platform } from "../entities/Platform";

interface Props {
  header: string;
  children: ReactNode;
}

const GameAttributes = ({ header, children }: Props) => {
  return (
    <>
      <Heading size={"sm"} marginTop={8} color="gray">
        {header}
      </Heading>
      {children}
    </>
  );
};

export default GameAttributes;

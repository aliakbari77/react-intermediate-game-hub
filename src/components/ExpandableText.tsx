import React, { useState } from "react";
import { Button, Text } from "@chakra-ui/react";

interface Props {
  text: string;
}

const ExpandableText = ({ text }: Props) => {
  const [expand, setExpand] = useState(false);

  const textModify = expand ? text : text.substring(0, 200) + "..."

  return (
    <>
      <Text>{textModify}</Text>
      <Button marginY={2} size="sm" colorScheme="yellow" onClick={() => {
        if (expand) setExpand(false)
        else setExpand(true)
      }}>{expand ? "Show Less" : "Show More"}</Button>
    </>
  );
};

export default ExpandableText;

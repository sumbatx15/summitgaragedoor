import { HStack } from "@chakra-ui/react";
import { Star } from "react-feather";

export const FiveStar = (props) => {
  return (
    <HStack spacing="0" {...props}>
      <Star size="1em" stroke="none" fill="var(--chakra-colors-yellow-300)" />
      <Star size="1em" stroke="none" fill="var(--chakra-colors-yellow-300)" />
      <Star size="1em" stroke="none" fill="var(--chakra-colors-yellow-300)" />
      <Star size="1em" stroke="none" fill="var(--chakra-colors-yellow-300)" />
      <Star size="1em" stroke="none" fill="var(--chakra-colors-yellow-300)" />
    </HStack>
  );
};

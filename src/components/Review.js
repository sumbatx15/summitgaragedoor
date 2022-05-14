import { Heading, HStack, Img, Square, Stack, Text } from "@chakra-ui/react";
import { FiveStar } from "./FiveStar";

export const Review = ({ title, message, name, location, ...props }) => {
  return (
    <Stack
      align="flex-start"
      justify="space-between"
      rounded="xl"
      shadow="xl"
      bg="white"
      p="8"
      maxW="sm"
      spacing="4"
      border="1px"
      borderColor="gray.200"
      {...props}
    >
      <Stack>
        <Stack spacing="0">
          <Square size="10">
            <Img src="/quote.svg" w="full" />
          </Square>
          <Heading fontSize="2xl">{title}</Heading>
        </Stack>
        <Text>{message}</Text>
      </Stack>
      <Stack align="start">
        <FiveStar fontSize="2xl" />
        <Stack spacing="0">
          <Text fontWeight="medium" fontSize="lg">
            {name}
          </Text>
          <HStack>
            <Img src="/CA.svg"  h="3" />
            <Text>{location}</Text>
          </HStack>
        </Stack>
      </Stack>
    </Stack>
  );
};

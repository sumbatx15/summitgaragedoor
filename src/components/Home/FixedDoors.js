import {
  Box,
  Button,
  Circle,
  Container,
  Heading,
  HStack,
  Img,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Phone } from "react-feather";

export const FixedDoorsBanner = () => {
  return (
    <Box bg="gray.800" color="white" py="10">
      <Container>
        <Stack textAlign="center" align="center" spacing="5">
          <Stack spacing={0}>
            <Text>Within 25 years of work</Text>
            <Heading>We repaired about</Heading>
            <Heading>15,000+ Garage doors</Heading>
            {/* <Img src="/garage-door.svg" alt="Doors" /> */}
          </Stack>
          <Text>Need a repair?</Text>
          <Stack align="center" spacing="1">
              <Button
                as="a"
                href="tel:+1-647-696-6639"
                size="lg"
                colorScheme="primary"
                rounded="full"
                py="7"
                w="xs"
                maxW="xs"
                leftIcon={<Phone />}
              >
                CALL US
              </Button>
              <HStack spacing="4px">
                <Circle bg="green.400" size="2" />
                <Text color="green.400">Open</Text>
                <Text fontSize="xs">24/7 Emergency Service</Text>
              </HStack>
            </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

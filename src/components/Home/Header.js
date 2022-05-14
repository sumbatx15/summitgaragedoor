import {
  Box,
  Button,
  Circle,
  Container,
  Flex,
  Heading,
  HStack,
  Img,
  Show,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Check, Phone, Star } from "react-feather";
import { FiveStar } from "../FiveStar";

export const Header = () => {
  return (
    <Box
      id="header"
      flex="1"
      pt={[5, "inherit"]}
      pb={["14", "inherit"]}
      pos="relative"
      bg="gray.800"
      color="white"
    >
      <Container h="full" maxW="container.lg">
        <Flex
          direction={["column", "row"]}
          h="full"
          pos="relative"
          zIndex="5"
          spacing="0"
        >
          <Stack
            bg="gray.800"
            flex="2"
            spacing={[10, 10]}
            h="full"
            justify={["flex-start", "center"]}
          >
            <Show below="md">
              <Img
                h="36"
                objectFit="cover"
                rounded="lg"
                src="/header-bg.png"
                alt="header"
              />
            </Show>

            <Stack>
              <HStack>
                <Img src="/CA.svg" h="4" />
                <Text>Ottawa Canada</Text>
              </HStack>
              {/* <HStack>
               <Img src="/CA.svg" h="4" />
                <Text>Ottawa Canada</Text> 
                <Circle bg="green.400" size="4" />
                <Text>Hours:</Text>
                <Text color="green.400">Open</Text>
                <Text>24/7</Text>
              </HStack>*/}
              <Heading fontSize={[32, 42, 54]} fontWeight="bold">
                Top-rated Garage door repair service in Ottawa
              </Heading>
            </Stack>
            <Stack fontSize={["md", "lg", "2xl"]}>
              <HStack>
                <Check stroke="var(--chakra-colors-orange-500)" />
                <Text>Thousands of satisfied customers</Text>
              </HStack>
              <HStack>
                <Star stroke="var(--chakra-colors-orange-500)" />
                <Text>Quick Responses and 5-Star Service</Text>
              </HStack>
              <HStack>
                <Check stroke="var(--chakra-colors-orange-500)" />
                <Text>Best Prices in the Local Market</Text>
              </HStack>
            </Stack>
            <Button
              as="a"
              href="tel:+1-647-696-6639"
              size="lg"
              colorScheme="orange"
              rounded="full"
              py="7"
              maxW="md"
              leftIcon={<Phone />}
            >
              CALL US: 647-696-6639
            </Button>
            <HStack
              spacing="5"
              fontSize={["2xl", "3xl"]}
              fontWeight="medium"
              justify={["center", "flex-start"]}
            >
              <Stack align="center" spacing="0">
                <Text>4.9</Text>
                <FiveStar fontSize="2xl" />
                <Stack justify="center" h="10">
                  <Img src="/birdeye.svg" />
                </Stack>
              </Stack>
              <Stack align="center" spacing="0">
                <Text>4.8</Text>
                <FiveStar fontSize="2xl" />
                <Stack justify="center" h="10">
                  <Img src="/yelp.svg" />
                </Stack>
              </Stack>
            </HStack>
          </Stack>

          <Show above="md">
            <Box
              ml="-0.5"
              flex="1"
              h="full"
              style={{ clipPath: "polygon(0 0, 0% 100%, 50% 0)" }}
              bg="gray.800"
            />
          </Show>
        </Flex>
      </Container>
      <Show above="md">
        <Img
          h="full"
          w={["full", "50%"]}
          objectFit={["contain", "cover"]}
          right="0"
          top="0"
          zIndex={0}
          pos={["initial", "absolute"]}
          src="/header-bg.png"
          alt="header"
        />
      </Show>
    </Box>
  );
};

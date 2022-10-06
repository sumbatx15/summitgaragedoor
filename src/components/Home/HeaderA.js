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

export const HeaderA = (props) => {
  return (
    <Box
      pos="relative"
      id="header"
      flex="1"
      pb={["14", "inherit"]}
      py={["14", "inherit"]}
      color="white"
      bg="gray.800"
    >
      <Img
        pos="absolute"
        top="0"
        left="0"
        w="full"
        h="full"
        src="/header-bg.png"
        objectFit="cover"
        opacity="0.2"
        pointerEvents="none"
      />
      {/* <Show below="md">
        <Img
          h="180px"
          w="full"
          objectFit="cover"
          // src="/header-bg.png"
          // src="https://blog.puls.com/hubfs/Puls%20Day%2020443-455947-edited-558993-edited.jpg"
          // src="https://cdn-ffcfk.nitrocdn.com/NwIRoYzuzLhvZOoqmnUNQZyxVEfmEbCu/assets/static/optimized/wp-content/uploads/2022/03/bb852c31fffc075f97bfd0b66407b19d.GARAGE-DOOR-INSTALLATION.jpg"
          src="https://overheadtampa.com/wp-content/uploads/elementor/thumbs/garage-door-repair-tampa-pf38jyufe2bi0njw1puxhmmfalmgwbmtjnapzgeu7k.jpg"
          alt="header"
          mb="8"
        />
      </Show> */}

      <Container
        py={{ base: "5", lg: "20" }}
        h="min"
        maxW="container.lg"
        {...props}
      >
        <Stack
          direction={{
            base: "column",
            lg: "row",
          }}
          justify="center"
          align="center"
          h="full"
          pos="relative"
          spacing={10}
          zIndex="5"
        >
          <Stack
            order={{ base: 2, lg: 1 }}
            flex="1"
            spacing={10}
            h="full"
            justify={{ base: "flex-start", lg: "center" }}
            maxW="630px"
          >
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
                <Check stroke="var(--chakra-colors-primary-500)" />
                <Text>Thousands of satisfied customers</Text>
              </HStack>
              <HStack>
                <Check stroke="var(--chakra-colors-primary-500)" />

                <Text>Quick Responses and 5-Star Service</Text>
              </HStack>
              <HStack>
                <Check stroke="var(--chakra-colors-primary-500)" />
                <Text>Best Prices in the Local Market</Text>
              </HStack>
            </Stack>
            <Stack>
              <Button
                as="a"
                href="tel:+1-647-696-6639"
                size="lg"
                colorScheme="primary"
                rounded="full"
                py="7"
                maxW="sm"
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
            {/* <HStack
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
            </HStack> */}
          </Stack>
          <Show above="md">
            <Img
              order={{ base: 1, lg: 2 }}
              display="inline-block"
              flex="1"
              maxW="400px"
              maxH={{ base: 100, md: 200, lg: 300, xl: 400 }}
              objectFit="contain"
              src="/door.png"
              // src="https://blog.puls.com/hubfs/Puls%20Day%2020443-455947-edited-558993-edited.jpg"
              // src="https://cdn-ffcfk.nitrocdn.com/NwIRoYzuzLhvZOoqmnUNQZyxVEfmEbCu/assets/static/optimized/wp-content/uploads/2022/03/bb852c31fffc075f97bfd0b66407b19d.GARAGE-DOOR-INSTALLATION.jpg"
              // src="https://overheadtampa.com/wp-content/uploads/elementor/thumbs/garage-door-repair-tampa-pf38jyufe2bi0njw1puxhmmfalmgwbmtjnapzgeu7k.jpg"
              alt="header"
            />
          </Show>
        </Stack>
      </Container>
      {/* <Show above="md">
        <Img
          h="full"
          w={["full", "50%"]}
          objectFit={["contain", "cover"]}
          right="0"
          top="0"
          zIndex={0}
          pos={["initial", "absolute"]}
          src="/header-bg.png"
          // src="https://blog.puls.com/hubfs/Puls%20Day%2020443-455947-edited-558993-edited.jpg"
          // src="https://cdn-ffcfk.nitrocdn.com/NwIRoYzuzLhvZOoqmnUNQZyxVEfmEbCu/assets/static/optimized/wp-content/uploads/2022/03/bb852c31fffc075f97bfd0b66407b19d.GARAGE-DOOR-INSTALLATION.jpg"
          alt="header"
        />
      </Show> */}
    </Box>
  );
};

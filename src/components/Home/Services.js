import {
  Box,
  Button,
  Circle,
  Container,
  Divider,
  Flex,
  Heading,
  HStack,
  Icon,
  Img,
  Show,
  Square,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Check, Phone } from "react-feather";

export const Services = (props) => {
  return (
    <>
      <Box id="services" py="10">
        <Container
          textAlign="left"
          maxW="container.lg"
          py={{ base: 0, md: 10 }}
        >
          <Stack px={{ base: "4", lg: "" }} spacing="10">
            <Stack spacing="0">
              {/* <Square size="14" mx="auto">
              <Img src="/garage-door.svg" w="full" />
            </Square> */}
              <Heading size="2xl">Our services</Heading>
              <Text fontSize="xl">Our garage door repair services include</Text>
            </Stack>
            <Stack
              direction={["column", "column", "row"]}
              align="stretch"
              spacing="10"
            >
              <Stack flex="1" wrap="wrap" ml="-2" divider={<Divider />}>
                <HStack>
                  <Icon
                    as={Check}
                    size="1em"
                    stroke="var(--chakra-colors-primary-500)"
                  />
                  <Text fontSize="md" fontWeight="medium" flex="1">
                    Garage Door Repair
                  </Text>
                </HStack>
                <HStack>
                  <Icon
                    as={Check}
                    size="1em"
                    stroke="var(--chakra-colors-primary-500)"
                  />
                  <Text fontSize="md" fontWeight="medium" flex="1">
                    Commercial Overhead Door Repair
                  </Text>
                </HStack>
                <HStack>
                  <Icon
                    as={Check}
                    size="1em"
                    stroke="var(--chakra-colors-primary-500)"
                  />
                  <Text fontSize="md" fontWeight="medium" flex="1">
                    Garage Door Spring, Cables, Rollers, Hinges and Track
                    Repairs
                  </Text>
                </HStack>
                <HStack>
                  <Icon
                    as={Check}
                    size="1em"
                    stroke="var(--chakra-colors-primary-500)"
                  />
                  <Text fontSize="md" fontWeight="medium" flex="1">
                    Garage Door Installation
                  </Text>
                </HStack>
                <HStack>
                  <Icon
                    as={Check}
                    size="1em"
                    stroke="var(--chakra-colors-primary-500)"
                  />
                  <Text fontSize="md" fontWeight="medium" flex="1">
                    Garage Door Opener Repair
                  </Text>
                </HStack>
                <HStack>
                  <Icon
                    as={Check}
                    size="1em"
                    stroke="var(--chakra-colors-primary-500)"
                  />
                  <Text fontSize="md" fontWeight="medium" flex="1">
                    Opener Installation
                  </Text>
                </HStack>
                <HStack>
                  <Icon
                    as={Check}
                    size="1em"
                    stroke="var(--chakra-colors-primary-500)"
                  />
                  <Text fontSize="md" fontWeight="medium" flex="1">
                    Garage Door Replacement
                  </Text>
                </HStack>
                <HStack>
                  <Icon
                    as={Check}
                    size="1em"
                    stroke="var(--chakra-colors-primary-500)"
                  />
                  <Text fontSize="md" fontWeight="medium" flex="1">
                    Off Track Garage Door Repair
                  </Text>
                </HStack>
                <HStack>
                  <Icon
                    as={Check}
                    size="1em"
                    stroke="var(--chakra-colors-primary-500)"
                  />
                  <Text fontSize="md" fontWeight="medium" flex="1">
                    Garage Door Tune-Up And Safety Inspections
                  </Text>
                </HStack>
                <HStack>
                  <Icon
                    as={Check}
                    size="1em"
                    stroke="var(--chakra-colors-primary-500)"
                  />
                  <Text fontSize="md" fontWeight="medium" flex="1">
                    Wireless Keypads And Remotes
                  </Text>
                </HStack>
                <HStack>
                  <Icon
                    as={Check}
                    size="1em"
                    stroke="var(--chakra-colors-primary-500)"
                  />
                  <Text fontSize="md" fontWeight="medium" flex="1">
                    24 Hours Emergency Garage Door Repair
                  </Text>
                </HStack>
              </Stack>
              <Show above="md">
                <Img
                  w={["full", "full", "50%"]}
                  objectFit="cover"
                  // src="/repairing.jpg"
                  // src="https://overheadtampa.com/wp-content/uploads/elementor/thumbs/garage-door-repair-tampa-pf38jyufe2bi0njw1puxhmmfalmgwbmtjnapzgeu7k.jpg"
                  src="https://www.actiongaragedoor.com/images/garage-door-repair-maintenance-dallas-fort-worth.jpg"
                  // rounded="xl"
                />
              </Show>
            </Stack>
          </Stack>
        </Container>
      </Box>
      <Box bg="gray.800" color="white" py="10">
        <Container>
          <Stack textAlign="center" align="center" spacing="5">
            <Stack spacing="0">
              <Heading fontSize={["4xl", "3xl"]}>
                We can probably help you 😉
              </Heading>
              <Text fontSize="xl">Call us at any moment</Text>
            </Stack>
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
    </>
  );
};

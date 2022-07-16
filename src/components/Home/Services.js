import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Heading,
  HStack,
  Img,
  Square,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Check, Phone } from "react-feather";

export const Services = (props) => {
  return (
    <Box id="services" py="10">
      <Container maxW="container.lg" py={[10]}>
        <Stack spacing="10">
          <Stack spacing="0" textAlign="center">
            {/* <Square size="14" mx="auto">
              <Img src="/garage-door.svg" w="full" />
            </Square> */}
            <Heading size="2xl">Our Services</Heading>
            <Text fontSize="xl">Our garage door repair services include</Text>
          </Stack>
          <Stack
            direction={["column", "column", "row"]}
            align="stretch"
            spacing="10"
          >
            <Img
              w={["full", "full", "50%"]}
              objectFit="cover"
              // src="/repairing.jpg"
              // src="https://overheadtampa.com/wp-content/uploads/elementor/thumbs/garage-door-repair-tampa-pf38jyufe2bi0njw1puxhmmfalmgwbmtjnapzgeu7k.jpg"
              src="https://www.actiongaragedoor.com/images/garage-door-repair-maintenance-dallas-fort-worth.jpg"
              // rounded="xl"
            />
            <Stack flex="1" wrap="wrap" ml="-2" divider={<Divider />}>
              <HStack>
                <Check size="1em" stroke="var(--chakra-colors-primary-500)" />
                <Text fontSize="md" fontWeight="medium">
                  Garage Door Repair
                </Text>
              </HStack>
              <HStack>
                <Check size="1em" stroke="var(--chakra-colors-primary-500)" />
                <Text fontSize="md" fontWeight="medium">
                  Commercial Overhead Door Repair
                </Text>
              </HStack>
              <HStack>
                <Check size="1em" stroke="var(--chakra-colors-primary-500)" />
                <Text fontSize="md" fontWeight="medium">
                  Garage Door Spring, Cables, Rollers, Hinges and Track Repairs
                </Text>
              </HStack>
              <HStack>
                <Check size="1em" stroke="var(--chakra-colors-primary-500)" />
                <Text fontSize="md" fontWeight="medium">
                  Garage Door Installation
                </Text>
              </HStack>
              <HStack>
                <Check size="1em" stroke="var(--chakra-colors-primary-500)" />
                <Text fontSize="md" fontWeight="medium">
                  Garage Door Opener Repair
                </Text>
              </HStack>
              <HStack>
                <Check size="1em" stroke="var(--chakra-colors-primary-500)" />
                <Text fontSize="md" fontWeight="medium">
                  Opener Installation
                </Text>
              </HStack>
              <HStack>
                <Check size="1em" stroke="var(--chakra-colors-primary-500)" />
                <Text fontSize="md" fontWeight="medium">
                  Garage Door Replacement
                </Text>
              </HStack>
              <HStack>
                <Check size="1em" stroke="var(--chakra-colors-primary-500)" />
                <Text fontSize="md" fontWeight="medium">
                  Off Track Garage Door Repair
                </Text>
              </HStack>
              <HStack>
                <Check size="1em" stroke="var(--chakra-colors-primary-500)" />
                <Text fontSize="md" fontWeight="medium">
                  Garage Door Tune-Up And Safety Inspections
                </Text>
              </HStack>
              <HStack>
                <Check size="1em" stroke="var(--chakra-colors-primary-500)" />
                <Text fontSize="md" fontWeight="medium">
                  Wireless Keypads And Remotes
                </Text>
              </HStack>
              <HStack>
                <Check size="1em" stroke="var(--chakra-colors-primary-500)" />
                <Text fontSize="md" fontWeight="medium">
                  24 Hours Emergency Garage Door Repair
                </Text>
              </HStack>
            </Stack>
          </Stack>
        </Stack>
      </Container>
      <Container py="4">
        <Stack spacing="4" align="center" textAlign="center">
          <Stack spacing="0">
            <Heading fontSize={["4xl", "3xl"]}>
              We can probably help you 😉
            </Heading>
            <Text fontSize="xl">Call us at any moment</Text>
          </Stack>
          <Stack>
            <Button
              as="a"
              href="tel:+1-647-696-6639"
              size="lg"
              colorScheme="primary"
              rounded="full"
              py="7"
              maxW="md"
              leftIcon={<Phone />}
            >
              CALL US: 647-696-6639
            </Button>
            <Text color="gray.600">24/7 - Emergency Service</Text>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

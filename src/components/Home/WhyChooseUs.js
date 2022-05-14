import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Img,
  Square,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Phone } from "react-feather";

export const WhyChooseUs = () => {
  return (
    <Box py="10">
      <Container maxW="container.lg" py={[10]}>
        <Stack spacing="10">
          <Stack spacing="0" textAlign="center">
            <Heading size="2xl">Why choose us?</Heading>
            <Text fontSize="xl">Great question</Text>
          </Stack>
          <Flex justify="center" align="start" wrap="wrap">
            <Stack flex="1 1 350px" m="2" mb={10} align="center" textAlign="center">
              <Img src="calendar.svg" w="10" />
              <Heading size="md">24/7 Emergency service</Heading>
              <Text>
                We provide 24-hour emergency services to all our customers
                because we know that garage doors do not have a specified time
                for developing faults.
              </Text>
            </Stack>

            <Stack flex="1 1 350px" m="2" mb={10} align="center" textAlign="center">
              <Img src="tools.svg" w="10" />
              <Heading size="md">5 year warranty</Heading>
              <Text>
                Summit garage doors also have five years labor and parts
                warranty for all our services; you definitely can&#39;t get this
                anywhere.
              </Text>
            </Stack>

            <Stack flex="1 1 350px" m="2" mb={10} align="center" textAlign="center">
              <Img src="badge.svg" w="10" />
              <Heading size="md">25 years of experience</Heading>
              <Text>
                We also have 25 years of experience in the business which means
                that we have virtually seen it all in garage door services.
              </Text>
            </Stack>
            
            <Stack flex="1 1 350px" m="2" mb={10} align="center" textAlign="center">
              <Img src="piggy-bank.svg" w="10" />
              <Heading size="md">Best Prices in the Local Market</Heading>
              <Text>
                We provide the best quality job and same day service at the best
                price in the local market
              </Text>
            </Stack>

           
          </Flex>
        </Stack>
      </Container>
    </Box>
  );
};

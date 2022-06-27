import {
  AbsoluteCenter,
  Box,
  Button,
  Container,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Img,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { AtSign, Home, MessageCircle, Phone, User } from "react-feather";

export const ContactUs = () => {
  const handleSubmit = (ev) => {
    console.log("ev:", ev);
  };

  return (
    <Box id="contact-us" py="10">
      <Container experimental_spaceY={4} maxW="container.lg" py={[10]}>
        <Heading as="h1" size="2xl">
          Contact us
        </Heading>
        <Stack spacing="24" direction={["column", "row"]}>
          <Stack flex="1" as="form" onSubmit={handleSubmit}>
            <Stack spacing={4} flex="1" direction={["column", "row"]}>
              <Stack flex={1} spacing="4">
                <FormControl>
                  <FormLabel htmlFor="given-name">Name</FormLabel>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      children={<User size="1em" />}
                    />
                    <Input
                      autoComplete="on"
                      name="given-name"
                      required
                      id="given-name"
                    />
                  </InputGroup>
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="tel">Phone</FormLabel>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      children={<Phone size="1em" />}
                    />
                    <Input autoComplete="on" name="tel" type="tel" id="tel" />
                  </InputGroup>
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      children={<AtSign size="1em" />}
                    />
                    <Input
                      autoComplete="on"
                      name="email"
                      type="email"
                      id="email"
                    />
                  </InputGroup>
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="street-address">Address</FormLabel>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      children={<Home size="1em" />}
                    />
                    <Input autoComplete="on" name="street-address" id="street-address" />
                  </InputGroup>
                </FormControl>
                <FormControl flex="1.5" h="full">
                  <FormLabel htmlFor="message">Message</FormLabel>
                  <Textarea
                    height="fit-content"
                    rows="10"
                    maxH="full"
                    minH="100px"
                    id="message"
                    placeholder="What seems to be the problem?"
                  />
                </FormControl>
              </Stack>
            </Stack>
            <Button type="submit" leftIcon={<MessageCircle size="1em" />}>
              <Text>Send</Text>
            </Button>
          </Stack>
          <Box
            rounded="2xl"
            overflow="hidden"
            w="fit-content"
            h="fit-content"
            pos="relative"
          >
            <Box
              pos="absolute"
              top="0"
              left="0"
              right="0"
              bottom="0"
              bg="blackAlpha.600"
            />
            <AbsoluteCenter color="white">
              <Stack align="center">
                <Heading>Write to us</Heading>
                <HStack>
                  <Divider w="10px" />
                  <Text>or</Text>
                  <Divider w="10px" />
                </HStack>
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
                  CALL US
                </Button>
              </Stack>
            </AbsoluteCenter>
            <Img
              flex="1"
              src="https://garagedoorindianapolis.com/uploads/content/local-repair.jpg"
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

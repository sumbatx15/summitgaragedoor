import {
  AbsoluteCenter,
  AspectRatio,
  Box,
  Button,
  Circle,
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
  Show,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import {
  AtSign,
  Home,
  MessageCircle,
  Phone,
  PhoneCall,
  Send,
  User,
} from "react-feather";

export const ContactUs = () => {
  const router = useRouter();
  const handleSubmit = (ev) => {
    ev.preventDefault();
    router.push("/thankyou");
  };

  return (
    <Box id="contact-us" py="10">
      <Container experimental_spaceY={4} maxW="container.lg" py={[10]}>
        <Stack
          align="center"
          spacing="10"
          direction={["column-reverse", "column-reverse", "row"]}
        >
          <Stack
            w="full"
            flex="1"
            spacing={4}
            as="form"
            onSubmit={handleSubmit}
          >
            <Heading as="h1" size="2xl">
              Write to us
            </Heading>
            <Stack
              bg="gray.50"
              border="1px"
              borderColor="gray.200"
              rounded="lg"
              p={8}
              spacing={4}
              flex="1"
              direction={["column", "row"]}
            >
              <Stack flex={1} spacing="8">
                <Stack spacing="2">
                  <FormControl>
                    <FormLabel htmlFor="name">Name</FormLabel>
                    <InputGroup>
                      <InputLeftElement
                        pointerEvents="none"
                        children={<User size="1em" />}
                      />
                      <Input bg="white" name="name" required id="name" />
                    </InputGroup>
                  </FormControl>
                  <FormControl>
                    <FormLabel htmlFor="tel">Phone</FormLabel>
                    <InputGroup>
                      <InputLeftElement
                        pointerEvents="none"
                        children={<Phone size="1em" />}
                      />
                      <Input bg="white" name="tel" type="tel" id="tel" />
                    </InputGroup>
                  </FormControl>
                  <FormControl>
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <InputGroup>
                      <InputLeftElement
                        pointerEvents="none"
                        children={<AtSign size="1em" />}
                      />
                      <Input bg="white" name="email" type="email" id="email" />
                    </InputGroup>
                  </FormControl>
                  <FormControl>
                    <FormLabel htmlFor="street-address">Address</FormLabel>
                    <InputGroup>
                      <InputLeftElement
                        pointerEvents="none"
                        children={<Home size="1em" />}
                      />
                      <Input
                        bg="white"
                        name="street-address"
                        id="street-address"
                      />
                    </InputGroup>
                  </FormControl>
                  <FormControl flex="1.5" h="full">
                    <FormLabel
                      mt="5"
                      htmlFor="message"
                      fontSize="xl"
                      fontWeight="bold"
                    >
                      What seems to be the problem?
                    </FormLabel>
                    <Textarea
                      bg="white"
                      height="fit-content"
                      maxH="full"
                      minH="100px"
                      id="message"
                      placeholder="Write a message..."
                    />
                  </FormControl>
                </Stack>
                <Button variant="ghost" size="lg" type="submit">
                  <HStack color="primary.500">
                    <Send size="1em" />
                    <Text>Send</Text>
                  </HStack>
                </Button>
              </Stack>
            </Stack>
          </Stack>

          <Show above="md">
            <Stack align="center">
              <Divider h="30px" orientation="vertical" />
              <Text>or</Text>
              <Divider h="30px" orientation="vertical" />
            </Stack>
          </Show>

          <Show below="md">
            <HStack align="center">
              <Divider w="30px" />
              <Text>or</Text>
              <Divider w="30px" />
            </HStack>
          </Show>

          <Stack flex="1" align="center">
            {/* <Img
              d="block"
              w="full"
              // src="https://img.freepik.com/free-vector/24-hours-service-icon-flat-style-all-day-business-service-vector-illustration-isolated-background-quick-service-time-sign-business-concept_157943-860.jpg?w=2000"
              src="/logo.svg"
              // src="https://www.davesgaragedoors.com/wp-content/uploads/2021/06/Garage-Door-Repair.jpg"
              // src="https://img.freepik.com/free-vector/contact-us-concept-illustration_114360-3147.jpg?w=2000"
            /> */}
            <Button
              as="a"
              href="tel:+1-647-696-6639"
              size="lg"
              colorScheme="primary"
              rounded="full"
              py="7"
              w="full"
              maxW="xl"
              leftIcon={<PhoneCall size="1.2em" />}
            >
              CALL US
            </Button>
          </Stack>

          {/* <Box
            hidden
            alignSelf="center"
            rounded="2xl"
            overflow="hidden"
            w="fit-content"
            h="fit-content"
            pos="relative"
            flex="1"
          >
            <Box
              zIndex={1}
              pos="absolute"
              top="0"
              left="0"
              right="0"
              bottom="0"
              bg="blackAlpha.600"
            />
            <AbsoluteCenter zIndex={1} color="white">
              <Stack align="center" w="full">
                <PhoneCall size="2em" />
                <HStack spacing="4px">
                  <Circle bg="green.300" size="2" />
                  <Text color="green.300">Open</Text>
                </HStack>
                <Text fontSize="xs">24/7 Emergency Service</Text>

                <Button
                  as="a"
                  href="tel:+1-647-696-6639"
                  size="lg"
                  colorScheme="primary"
                  rounded="full"
                  py="7"
                  w="full"
                  maxW="xl"
                >
                  CALL US
                </Button>
              </Stack>
            </AbsoluteCenter>

            <AspectRatio zIndex={0} ratio="1" flex="1">
              <Img
                w="full"
                h="full"
                // src="https://www.accessgaragedoors.com/wp-content/uploads/fix-garage-doors.jpg"
                // src="https://utahgaragedoors.net/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/07/garage-door-openers-utah.jpg.webp"
                // src="https://garagedoorindianapolis.com/uploads/content/local-repair.jpg"
                src="https://overheadtampa.com/wp-content/uploads/elementor/thumbs/garage-door-repair-tampa-pf38jyufe2bi0njw1puxhmmfalmgwbmtjnapzgeu7k.jpg"
              />
            </AspectRatio>
          </Box> */}
        </Stack>
      </Container>
    </Box>
  );
};

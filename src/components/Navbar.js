import {
  Box,
  Button,
  Circle,
  Container,
  Flex,
  HStack,
  Img,
  Stack,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { Phone } from "react-feather";
import { useMouseWheel, useScroll, useWindowScroll } from "react-use";

export const Navbar = (props) => {
  const { x, y } = useWindowScroll();
  const shadow = y > 0 ? "xl" : "";
  return (
    <Box
      as="nav"
      bg="white"
      p="4"
      pos="sticky"
      zIndex={10}
      top="0"
      transition="box-shadow 200ms ease-in-out"
      shadow={shadow}
      {...props}
    >
      <Container maxW="container.lg">
        <Flex align="center">
          <HStack spacing="10">
            <Stack spacing="0">
              <Img src="/logo.svg" h={"50px"} transition="height 50ms" />
            </Stack>
            <Link href="#header">Home</Link>
            <Link href="#services">Services</Link>
            <Link href="#gallery">Gallery</Link>
            <Link href="#reviews">Reviews</Link>
            <Link href="#contact-us">Contact us</Link>
          </HStack>
          <Button
            as="a"
            href="tel:+1-647-696-6639"
            leftIcon={<Phone />}
            rounded="full"
            ml="auto"
            colorScheme="gray"
            variant="outline"
          >
            <Stack fontSize="sm" fontWeight="medium" spacing="0">
              <HStack spacing="4px">
                <Circle bg="green.400" size="2" />
                <Text color="green.400">Open</Text>
              </HStack>
              <Text fontSize="xs">24/7 Emergency Service</Text>
            </Stack>
          </Button>
        </Flex>
      </Container>
    </Box>
  );
};

import { Box, Container, HStack, Img } from "@chakra-ui/react";
import Link from "next/link";
import { useMouseWheel, useScroll, useWindowScroll } from "react-use";

export const Navbar = () => {
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
    >
      <Container maxW="container.lg">
        <HStack>
          <Img src="/logo.svg" h={"50px"} transition="height 50ms" />
          <Link href="/home">Home</Link>
          <Link href="/">Home</Link>
          <Link href="/">Home</Link>
          <Link href="/">Home</Link>
        </HStack>
      </Container>
    </Box>
  );
};

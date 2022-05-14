import { Box, Container, HStack, Img } from "@chakra-ui/react";
import Link from "next/link";
import { Menu } from "react-feather";
import { useWindowScroll } from "react-use";

export const MobileNavbar = () => {
  const { x, y } = useWindowScroll();
  const shadow = y > 0 ? "xl" : "";
  return (
    <Box
      as="nav"
      bg="gray.800"
      color="white"
      py="2"
      pos="sticky"
      zIndex={10}
      top="0"
      transition="box-shadow 200ms ease-in-out"
      shadow={shadow}
    >
      <Container maxW="container.lg">
        <HStack align="center" justify="space-between">
          <Img src="/logo-white.svg" h="10" />
          <Menu />
        </HStack>
      </Container>
    </Box>
  );
};

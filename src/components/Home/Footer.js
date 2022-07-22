import { Box, Container, Heading, Stack, Link, HStack } from "@chakra-ui/react";
import { Map } from "react-feather";

export const Footer = () => {
  return (
    <Box id="contact-us" py="10" bg="gray.800" color="white">
      <Container maxW="container.lg">
        <Stack>
          <HStack>
            <Map />
            <Heading fontWeight="medium" size="md">
              Site map
            </Heading>
          </HStack>
          <Link href="#header">Home</Link>
          <Link href="#services">Services</Link>
          <Link href="#whyus">Why choose us</Link>
          <Link href="#gallery">Gallery</Link>
          <Link href="#reviews">Reviews</Link>
          <Link href="#contact-us">Contact us</Link>
        </Stack>
      </Container>
    </Box>
  );
};

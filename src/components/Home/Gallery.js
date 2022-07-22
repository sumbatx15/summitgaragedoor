import { Box, Container, Heading, Stack, Text } from "@chakra-ui/react";
import ImageGallery from "react-image-gallery";

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

export const Gallery = () => {
  return (
    <Box id="gallery" py="10">
      <Container maxW="container.lg" py={[10]}>
        <Stack spacing="10">
          <Stack spacing="0" textAlign="center">
            <Heading size="2xl">Gallery</Heading>
            <Text fontSize="xl">Before and after</Text>
          </Stack>
          <ImageGallery items={images} />;
        </Stack>
      </Container>
    </Box>
  );
};

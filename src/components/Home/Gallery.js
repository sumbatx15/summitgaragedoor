import { Box, Container, Heading, Stack, Text } from "@chakra-ui/react";
import ImageGallery from "react-image-gallery";

const images = [
  {
    original: "https://rhinogaragedoorsct.com/wp-content/uploads/2018/10/garage-door-repair.jpg",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "http://mhgaragedoorrepair.com/wp-content/uploads/2022/02/Precise-Garage-Doors-IMG_2857-1024x768-1.jpg",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://www.overheaddoor.com/garageDoors/garage-door-repair.jpg",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

export const Gallery = () => {
  return (
    <Box id="gallery" py="10">
      <Container maxW="container.lg" py={{base: 0, md: 10}}>
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

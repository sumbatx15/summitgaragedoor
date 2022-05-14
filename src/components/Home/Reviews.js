import { Box, Container, Heading, Stack, Text } from "@chakra-ui/react";
import { Review } from "../Review";

export const Reviews = (props) => {
  return (
    <Box py="10">
      <Container maxW="container.lg" py={[10]}>
        <Stack spacing="10">
          <Stack spacing="0" textAlign="center">
            {/* <Square size="14" mx="auto">
              <Img src="/reviews.svg" w="full" />
            </Square> */}
            <Heading size="2xl">Customers reviews</Heading>
            <Text fontSize="xl">Our garage door repair services include</Text>
          </Stack>
          <Stack direction={["column", "column", "row"]}>
            <Review
              flex="1"
              title="Very reliable service"
              message={`Very reliable service, great job done on my garage door by the very nice representative of your company. Definitely, I will recommend your company to anyone who will need your services. Thank you!`}
              name="Anna D."
              location="Toronto"
            />
            <Review
              flex="1"
              title="Great people to deal with"
              message="Tech was thorough and very professional. Arrived on time. Great people to deal with"
              name="Liz C."
              location="Toronto"
            />
            <Review
              flex="1"
              title="I will definitely use them again"
              message={`Professional service. Meir, the onsite technician was excellent. The door was repaired within 2hrs of the phone call. I will definitely use them again and recommend them to others`}
              name="Minh T."
              location="Toronto"
            />
            <Review
              hidden={true}
              flex="1"
              title="Everything was explained and disclosed clearly"
              message="Summit Garage Doors has been very professional since the first
    interaction I had on the phone up till when the work was done.
    Everything was explained and disclosed clearly prior to
    booking and work carried out. The technician is experienced
    and very attentive to his work. He thoroughly assess the
    situation and provided the most honest and upfront thoughts
    about my Garage Door. A very happy customer. Definitely
    reflects all the good reviews online."
              name="Daniel H."
              location="Ottawa"
            />
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

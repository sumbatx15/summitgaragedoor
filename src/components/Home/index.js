import { Divider, Show, Stack } from "@chakra-ui/react";
import { Navbar } from "src/components/Navbar";
import { MobileNavbar } from "../MobileNavbar";
import { FixedDoors } from "./FixedDoors";
import { Header } from "./Header";
import { Reviews } from "./Reviews";
import { Services } from "./Services";
import { WhyChooseUs } from "./WhyChooseUs";

export const Home = () => {
  return (
    <>
      <Show above="md">
        <Navbar />
      </Show>
      <Show below="md">
        <MobileNavbar />
      </Show>
      <Stack spacing="0" h={["auto", "100vh"]}>
        <Header />
      </Stack>
      <Stack spacing="0" divider={<Divider />}>
        <Services />
        <WhyChooseUs />
        <FixedDoors />
        <Reviews />
      </Stack>
    </>
  );
};

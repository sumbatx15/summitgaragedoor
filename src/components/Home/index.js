import { Divider, Show, Stack } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { Navbar } from "src/components/Navbar";
import { MobileNavbar } from "../MobileNavbar";
import { ContactUs } from "./ContactUs";
import { FixedDoorsBanner } from "./FixedDoors";
import { Footer } from "./Footer";
import { Gallery } from "./Gallery";
import { HeaderA } from "./HeaderA";
import { HeaderB } from "./HeaderB";
import { Reviews } from "./Reviews";
import { Services } from "./Services";
import { WhyChooseUs } from "./WhyChooseUs";

export const Home = () => {
  const containerRef = useRef();

  return (
    <>
      <Show below="lg" children={<MobileNavbar />} />
      <Show above="lg" children={<Navbar />} />
      <Stack
        ref={containerRef}
        pos="relative"
        spacing="0"
        divider={<Divider />}
      >
        <HeaderB h={["auto"]} />
        {/* <HeaderA h={["auto"]} /> */}
        <Services />
        <WhyChooseUs />
        <FixedDoorsBanner />
        <Gallery />
        <Reviews />
        <ContactUs />
        <Footer />
      </Stack>
    </>
  );
};

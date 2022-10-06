import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  fonts: {
    heading: "Poppins, sans-serif",
    body: "Poppins, sans-serif",
  },
  colors: {
    primary: {
      50: "#ffe2ee",
      100: "#ffb1c8",
      200: "#ff7fa4",
      300: "#ff4d80",
      400: "#fe1d5b",
      500: "#C70833",
      600: "#b30033",
      700: "#810025",
      800: "#4f0015",
      900: "#200007",
    },
    blue: {
      50: "#E5F4FF",
      100: "#B8E1FF",
      200: "#8ACEFF",
      300: "#5CBBFF",
      400: "#2EA8FF",
      500: "#C70039 ",
      600: "#0077CC",
      700: "#005999",
      800: "#003C66",
      900: "#001E33",
    },
    orange: {
      50: "#FDEEE7",
      100: "#FACFBD",
      200: "#F7B092",
      300: "#F49267",
      400: "#F0733D",
      500: "#ED5412",
      600: "#BE430E",
      700: "#8E320B",
      800: "#5F2207",
      900: "#2F1104",
    },
  },
});

export default theme;

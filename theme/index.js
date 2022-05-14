import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: "Poppins, sans-serif",
    body: "Poppins, sans-serif",
  },
  colors: {
    blue: {
      50: "#E5F4FF",
      100: "#B8E1FF",
      200: "#8ACEFF",
      300: "#5CBBFF",
      400: "#2EA8FF",
      500: "#0095FF",
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

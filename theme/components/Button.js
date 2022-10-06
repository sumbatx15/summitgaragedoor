import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system";
import { mode } from "@chakra-ui/theme-tools";
const accessibleColorMap = {
  yellow: {
    bg: "yellow.400",
    color: "black",
    hoverBg: "yellow.500",
    activeBg: "yellow.600",
  },
  cyan: {
    bg: "cyan.400",
    color: "black",
    hoverBg: "cyan.500",
    activeBg: "cyan.600",
  },
};

export const Button = {
  // Styles for the base style
  baseStyle: {},
  // Styles for the size variations
  sizes: {},
  // Styles for the visual style variations
  variants: {
    solid: defineStyle((props) => {
      const { colorScheme: c } = props;

      if (c === "gray") {
        const bg = mode(`gray.100`, `whiteAlpha.200`)(props);

        return {
          bg,
          _hover: {
            bg: mode(`gray.200`, `whiteAlpha.300`)(props),
            _disabled: {
              bg,
            },
          },
          _active: { bg: mode(`gray.300`, `whiteAlpha.400`)(props) },
        };
      }

      const {
        bg = `${c}.500`,
        color = "white",
        hoverBg = `${c}.600`,
        activeBg = `${c}.700`,
      } = accessibleColorMap[c] ?? {};

      return {
        bg,
        color,
        _hover: {
          bg: hoverBg,
          _disabled: { bg },
        },
        _active: { bg: mode(activeBg, `${c}.400`)(props) },
      };
    }),
  },
  // The default `size` or `variant` values
  defaultProps: {},
};

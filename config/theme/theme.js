import { extendTheme } from "@chakra-ui/react";
import tailwindColors from "./tailwindColors";

const styles = {
  global: (props) => ({
    "html, body": {
      color: props.colorMode === "dark" ? "white" : "gray.600",
      backgroundColor: props.colorMode === "dark" ? "brand.900" : "gray.50",
    },
    a: {
      color: props.colorMode === "dark" ? "teal.300" : "teal.500",
    },
  }),
}

const colors = {
  // Update me with other Tailwind colors or with https://smart-swatch.netlify.app/
  brand: {
    50: "#F2F4FD",
    100: "#DDE3F8",
    200: "#BEC6EE",
    300: "#95A2E4",
    400: "#5C70D4",
    500: "#3249C2",
    600: "#283DA4",
    700: "#192A75",
    800: "#091947",
    900: "#020B2A",
  },
  gray: tailwindColors.blueGray,
  success: tailwindColors.emerald,
  error: tailwindColors.red,
  warning: tailwindColors.amber,
};

export const theme = extendTheme({ colors, styles });

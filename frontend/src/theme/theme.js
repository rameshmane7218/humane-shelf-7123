import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    heading: "Open Sans",
    body: "Open Sans",
  },
  styles: {
    global: {
      body: {
        bg: "gray.50",
        color: "gray.900",
      },
      h1: {
        fontSize: "3xl",
        fontWeight: "bold",
      },
      h2: {
        fontSize: "2xl",
        fontWeight: "bold",
      },
      h3: {
        fontSize: "lg",
        fontWeight: "bold",
      },
      h4: {
        fontSize: "md",
        fontWeight: "bold",
      },
    },
  },
});

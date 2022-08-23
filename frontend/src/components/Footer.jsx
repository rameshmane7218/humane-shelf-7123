import { Box, Container, Heading, Text } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Box border="1px solid red">
      <Box>
        <Container
          maxW="container.xl"
          boxSizing="border-box"
          p={"0"}
          border={"1px solid blue"}
        >
          <Text>INDIA’S LARGEST HEALTHCARE PLATFORM</Text>
        </Container>
      </Box>
      <Box boxSizing={"border-box"} bg="#fffcf8">
        <Container
          maxW="container.xl"
          boxSizing="border-box"
          p={"0"}
          border={"1px solid blue"}
        >
          <Heading>Footer</Heading>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;

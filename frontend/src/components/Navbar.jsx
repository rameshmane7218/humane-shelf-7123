import { Box, Container, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Icons } from "./icons";

const Navbar = () => {
  return (
    <Box
      boxShadow={"base"}
      zIndex={"sticky"}
      bg={"white"}
      w={"100%"}
      position={"fixed"}
      top={0}
      left={0}
      right={0}
    >
      <Container
        justifyContent={"space-between"}
        alignItems={"center"}
        minH={"88px"}
        maxW="container.xl"
        m={"auto"}
        border={"1px solid blue"}
      >
        <Text>Navbar</Text>
        <Icons name="Cart" />
      </Container>
    </Box>
  );
};

export default Navbar;

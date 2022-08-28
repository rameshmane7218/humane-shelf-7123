import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  chakra,
  Flex,
  Image,
  Spinner,
  Stack,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { BiRupee } from "react-icons/bi";
import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";

const SliderComp = ({ product }) => {
  return (
    <Box
      border={"1px solid #eee"}
      transition={".3s"}
      rounded={4}
      height="350px"
      width={"230px"}
      bg={"white"}
      _hover={{
        transition: ".6s",
        boxShadow: "0 0 9px 0 rgb(0 0 0 / 30%)",
      }}
      position={"relative"}
      p={"10px"}
    >
      <Box
        width="200px"
        margin="auto"
        p={"20px 20px"}
        bg={"white"}
        rounded={4}
        position={"relative"}
      >
        <Link
          to={`/products/${product._id}`}
          style={{ textDecoration: "none" }}
        >
          <Image
            src={product?.imageUrl}
            h="150px"
            bg={"#f9f9f9"}
            display="block"
            m={"auto"}
          />
        </Link>
      </Box>
      <Box
        h={"42px"}
        // border={"1px solid blue"}
        fontSize="14px"
        fontWeight={"400"}
        lineHeight="20px"
        color={"#212121"}
        // textOverflow={"ellipsis"}
        textOverflow={"..."}
        overflow="hidden"
        mt="10px"
      >
        {product.productName}
      </Box>
      <Text
        fontSize="12px"
        fontWeight={"400"}
        lineHeight="17px"
        color={"#757575"}
      >
        {product.shortDesc}
      </Text>

      <Flex
        mt={"5px"}
        left="0"
        flexDirection={"row"}
        justifyContent="flex-start"
        alignItems={"center"}
      >
        <Box
          paddingLeft={"5px"}
          flexDirection={"row"}
          justifyContent="flex-start"
          alignItems={"center"}
          borderRadius={"2px"}
          bg={"#1aab2a"}
          color={"white"}
          fontWeight={"bold"}
          fontSize="12px"
          pr={"5px"}
        >
          {product.ratings}{" "}
          <StarIcon marginTop={"-3px"} color={"white"} fontSize="10px" />
        </Box>
        <Text marginLeft={3} fontSize="12px">
          {product.numberOfRatings}
        </Text>
      </Flex>
      <Flex
        mt={"5px"}
        paddingLeft={"2px"}
        flexDirection={"row"}
        justifyContent="flex-start"
        alignItems={"center"}
        borderRadius={"2px"}
        fontSize="14px"
        mb={"30px"}
        // border={"1px solid red"}
      >
        <Text
          fontSize="12px"
          fontWeight={"400"}
          lineHeight="17px"
          color={"#757575"}
        >
          MRP{" "}
          <Text as={"span"} textDecoration={"line-through"}>
            {" "}
            {product.strikedPrice}
          </Text>
        </Text>
        <Text
          pl={"10px"}
          color="#5ac265"
          fontSize="12px"
          fontWeight={600}
          lineHeight="16px"
        >
          {product.discount}% off
        </Text>
      </Flex>
      <Box>
        <Flex
          position={"absolute"}
          bottom={1}
          left={0}
          right={0}
          marginLeft="10px"
          marginRight="10px"
          height={"40px"}
          // paddingBottom={"5px"}
          flexDirection={"row"}
          justifyContent="space-between"
          alignItems={"center"}
          borderRadius={"2px"}
          fontWeight={"bold"}
          fontSize="14px"
        >
          <Flex justifyContent="flex-start" alignItems={"center"}>
            <BiRupee fontSize={"16px"} />

            <Text fontSize={"16px"}> {product.price}</Text>
          </Flex>
          <Stack></Stack>
        </Flex>
      </Box>
    </Box>
  );
};

export default SliderComp;

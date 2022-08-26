import React, { useState } from "react";
import { Box, Grid,Flex,Text } from "@chakra-ui/react";
import alldata from "../assets/alldata"
import Allproduct from "../components/Products/Allproduct";
const Products = () => {
  const data = alldata.data

  console.log(data)
  return <div>
    <Flex>
      <Box>
           
      </Box>
       <Box>
       <Text>All Products</Text>
       
      <Grid
        width={"100%"}
        // border={"1px solid orange"}
        templateColumns={["repeat(2, 1fr)", "repeat(3, 1fr)", "repeat(4, 1fr)"]}
        gap={4}
      >
        
        {data.map((product) => (

          <Allproduct product={product} key={product._id} />
        ))}
      </Grid>
      </Box>
    </Flex>
  </div>;
};

export default Products;

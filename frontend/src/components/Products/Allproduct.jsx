import React, { useState ,useEffect} from "react";
import { Link } from "react-router-dom";
import {
  Box,
  chakra,
  Flex,
  Image,
  Spinner,
  Stack,
  Text
} from "@chakra-ui/react";
import { StarIcon } from '@chakra-ui/icons'
import { BiRupee } from "react-icons/bi";
import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchdes, AddToCart } from "../../store/products/products.actions";

const ToolTip = styled.i`
  font-size: 12px;
  cursor: pointer;
  color: #828282;
`;
const CartPlusIcon = styled.i`
  margin-right: 5px;
`;
const AddToCartBtn = styled.button`
  border-radius: 15px;
  background-color: #fff;
  color: #4fbb90;
  font-size: 12px;
  font-weight: 500;
  line-height: 15px;
  padding: 6px 16px;
  outline: 0;
  border: 1px solid #4fbb90;
  min-width: 80px;
  &:hover {
    background-color: #4fbb90;
    color: #fff;
  }
`;

const CartDec = styled.button`
  background-color: #fff;
  outline: 0;
  font-size: 10px;
  padding: 5px 7px 4px 9px;
  color: #4fbb90;
  border-top-left-radius: 50%;
  border-bottom-left-radius: 50%;
  border: 1px solid #4fbb90;
  &:hover {
    background-color: #4fbb90;
    color: #fff;
  }
`;
const CartInc = styled.button`
  background-color: #fff;
  outline: 0;
  font-size: 10px;
  padding: 5px 9px 4px 7px;
  color: #4fbb90;
  border-top-right-radius: 50%;
  border-bottom-right-radius: 50%;
  border: 1px solid #4fbb90;
  &:hover {
    background-color: #4fbb90;
    color: #fff;
  }
`;
const CardCount = styled.div`
  width: 30px;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  padding-top: 4px;
  text-align: center;
`;



const AllProduct = ({ product }) => {
  const [countValue, setCountValue] = useState(0);
  const { id } = useParams();
  
 let name = useSelector((state) => state.name);
   const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchdes(id));
  // }, [id, dispatch]);
  

  
  return (

    <Box
      border={"1px solid #eee"}
      transition={".3s"}
      rounded={4}
      height="340px"

      bg={"white"}
      _hover={{
        transition: ".6s",
        boxShadow: "0 0 9px 0 rgb(0 0 0 / 30%)",
      }}
      position={"relative"}
      mb={"40px"}
    >


      <Box height="100px" width="200px" margin="auto" p={"10px 20px 0"} bg={"white"} rounded={4} position={"relative"}>
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
      <Text marginTop={"90px"} marginLeft={"10px"} fontSize="14px" fontWeight={"400"} lineHeight="20px" color={"#212121"}>{product.productName}</Text>
      <Text marginLeft={"10px"} fontSize="12px" fontWeight={"400"} lineHeight="17px" color={"#757575"}>{product.shortDesc}</Text>
      <Flex left="0" flexDirection={"row"} justifyContent="flex-start" alignItems={"center"}>
        <Box
          marginLeft={"10px"}
          paddingLeft={"2px"}
          flexDirection={"row"}
          justifyContent="flex-start"
          alignItems={"center"}
          borderRadius={"2px"}
          bg={"#1aab2a"}
          color={"white"}
          fontWeight={"bold"}
          fontSize="14px"
        >{product.ratings}
          <StarIcon marginTop={"-3px"} color={"white"} fontSize="12px" />
        </Box><Text marginLeft={3} fontSize="12px">{product.numberOfRatings}</Text>
      </Flex>
      <Flex
        marginLeft={"10px"}
        paddingLeft={"2px"}
        flexDirection={"row"}
        justifyContent="flex-start"
        alignItems={"center"}
        borderRadius={"2px"}

        fontSize="14px">
        <Text fontSize="12px" textDecoration={"line-through"} fontWeight={"400"} lineHeight="17px" color={"#757575"}>MRP {product.strikedPrice}</Text>
        <Text marginLeft={"5px"} color="#5ac265" fontSize="11px" lineHeight="16px">{product.discount}% off</Text>
      </Flex>
      <Box>

        <Flex
          position={"absolute"}
          bottom={0} left={0} right={0}
          marginLeft="15px"
          marginRight="15px"
          height={"40px"}
          // paddingBottom={"5px"}
          flexDirection={"row"}
          justifyContent="space-between"
          alignItems={"center"}
          borderRadius={"2px"}
          fontWeight={"bold"}
          fontSize="14px"

        >
          <Flex justifyContent="flex-start"
            alignItems={"center"}><BiRupee />

            <Text  > {product.price}</Text>
          </Flex>
          <Stack>
                {countValue == 0 ? (
                  <AddToCartBtn
                    // key={product.id}

                    onClick={() => {
                      dispatch(
                        AddToCart({
                          name: name,
                          _id: product._id,
                        })
                      );
                    }}
                    // onClick={() => handleAddToCart(product)}
                  >
                    {/* {addCartItem.loading && addCartItem._id === product._id ? (
                      <Spinner speed="0.65s" size="xs" />
                    ) : ( */}
                      <Flex>
                        <CartPlusIcon className="fa-solid fa-cart-plus"></CartPlusIcon>
                        ADD
                      </Flex>
                    {/* )} */}
                  </AddToCartBtn>
                ) : (
                  <Flex>
                    <CartDec
                      // onClick={() =>
                      //   handleUpdate(product?._id, Number(countValue) - 1)
                      // }
                    >
                      <i className="fa-solid fa-minus"></i>
                    </CartDec>
                    {/* <Tooltip
                      hasArrow
                      label={`Max Qty 5`}
                      bg="#666"
                      opacity={"0.5"}
                      color="white"
                      placement="top"
                      fontWeight={400}
                      fontSize="12px"
                    >
                      {updateCartItem.loading &&
                      updateCartItem._id == product._id ? (
                        <CardCount>
                          <Spinner speed="0.65s" size="xs" />
                        </CardCount>
                      ) : (
                        <CardCount>{countValue}</CardCount>
                      )}
                    </Tooltip> */}
                     <CardCount>{countValue}</CardCount>

                    <CartInc
                      disabled={countValue >= 5}
                      // onClick={() => {
                      //   handleUpdate(product?._id, Number(countValue) + 1);
                      // }}
                    >
                      <i className="fa-solid fa-plus"></i>
                    </CartInc>
                  </Flex>
                )}
              </Stack>
        </Flex>
      </Box>
    </Box>

  );
};

export default AllProduct;
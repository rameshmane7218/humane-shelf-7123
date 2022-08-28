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
import { useParams } from "react-router-dom";
import { fetchdes, AddToCart } from "../../store/products/products.actions";
import {
  addItemToCartAPI,
  removeItemFromCartAPI,
  updateCartItemAPI,
} from "../../store/cart/cart.actions";

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
  color: #ff6f61;
  font-size: 12px;
  font-weight: 500;
  line-height: 15px;
  padding: 6px 16px;
  outline: 0;
  border: 1px solid #ff6f61;
  min-width: 80px;
  &:hover {
    background-color: #ff6f61;
    color: #fff;
  }
`;

const CartDec = styled.button`
  background-color: #fff;
  outline: 0;
  font-size: 10px;
  padding: 5px 7px 4px 9px;
  color: #ff6f61;
  border-top-left-radius: 50%;
  border-bottom-left-radius: 50%;
  border: 1px solid #ff6f61;
  &:hover {
    background-color: #ff6f61;
    color: #fff;
  }
`;
const CartInc = styled.button`
  background-color: #fff;
  outline: 0;
  font-size: 10px;
  padding: 5px 9px 4px 7px;
  color: #ff6f61;
  border-top-right-radius: 50%;
  border-bottom-right-radius: 50%;
  border: 1px solid #ff6f61;
  &:hover {
    background-color: #ff6f61;
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
// const sample = {
//   _id: "",
//   prodHighlights:""
//   longDesc:
//   imageUrl:
//   productName:,
//   shortDesc:,
//   ratings:,
//   numberOfRatings: ,
//   strikedPrice: ,
//   price: ,
//   discount:,
//   brand: ,
// };

const AllProduct = ({ product }) => {
  const [countValue, setCountValue] = useState(0);
  const { id } = useParams();
  const dispatch = useDispatch();
  const {
    data: cartData,
    getCartItems,
    addCartItem,
    updateCartItem,
  } = useSelector((state) => state.cart);

  const handleAddToCart = (item) => {
    const addData = {
      _productId: item._id,
      productName: item.productName,
      count: 1,
      prodHighlights: item.prodHighlights,
      longDesc: item.longDesc,
      imageUrl: item.imageUrl,
      shortDesc: item.shortDesc,
      ratings: item.ratings,
      numberOfRatings: item.numberOfRatings,
      strikedPrice: item.strikedPrice,
      price: item.price,
      discount: item.discount,
      brand: item.brand,
    };
    let ans = cartData.filter((data) => data._productId == item._id);
    // console.log("ans is:", ans);
    if (ans.length === 0) {
      dispatch(addItemToCartAPI(addData));
    }
  };

  const handleUpdate = (id, value) => {
    let update = cartData.filter((data) => data._productId == id);
    // let ans = cartData.find(someobject => someobject.productId == id).count = 10;
    // console.log(update[0]);
    // console.log("id:", ans)

    if (value == 0) {
      dispatch(removeItemFromCartAPI(update[0]._id));
    } else if (update.length !== 0) {
      const payload = {
        cartId: update[0]._id,
        _productId: update[0]._productId,
        newCount: value,
      };
      dispatch(updateCartItemAPI(payload));
    }
  };

  // below function is used to remove cart item,
  // In this all products page remove button is not available
  // it will be used in cart page and single product page
  const handleRemoveFromCart = (value) => {
    let remove = cartData.filter((data) => data._productId == value);
    // console.log("ans is:", remove,remove[0]?.id);
    if (remove.length !== 0) {
      // console.log(remove.id);
      dispatch(removeItemFromCartAPI(remove[0]._id));
    }
  };

  //Below useEffect is used to fetch count of cart item
  useEffect(() => {
    const getCount = () => {
      let ans = cartData.filter((data) => data._productId == product._id);
      return ans[0] ? ans[0]?.count : 0;
    };
    setCountValue(Number(getCount()));
  }, [product, cartData]);
  // let username = useSelector((state) => state.name);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchdes(id));
  // }, [id, dispatch]);

  return (
    <Box
      border={"1px solid #eee"}
      transition={".3s"}
      rounded={4}
      // height="340px"
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
          <Stack>
            {countValue == 0 ? (
              <AddToCartBtn
                key={product._id}
                onClick={() => handleAddToCart(product)}
              >
                {addCartItem.loading && addCartItem._id === product._id ? (
                  <Spinner speed="0.65s" size="xs" />
                ) : (
                  <Flex>
                    <CartPlusIcon className="fa-solid fa-cart-plus"></CartPlusIcon>
                    ADD
                  </Flex>
                )}
              </AddToCartBtn>
            ) : (
              <Flex>
                <CartDec
                  onClick={() =>
                    handleUpdate(product?._id, Number(countValue) - 1)
                  }
                >
                  <i className="fa-solid fa-minus"></i>
                </CartDec>
                <Tooltip
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
                </Tooltip>

                <CartInc
                  disabled={countValue >= 5}
                  onClick={() => {
                    handleUpdate(product?._id, Number(countValue) + 1);
                  }}
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

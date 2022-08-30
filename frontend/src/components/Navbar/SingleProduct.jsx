import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import {
  Box,
  Flex,
  Image,
  Spinner,
  Text,
  Tooltip,
  Stack,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";
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

const SingleProduct = ({ item, onClose, setQuery }) => {
  const [countValue, setCountValue] = useState(0);

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

  //Below useEffect is used to fetch count of cart item
  useEffect(() => {
    const getCount = () => {
      let ans = cartData.filter((data) => data._productId == item._id);
      return ans[0] ? ans[0]?.count : 0;
    };

    setCountValue(Number(getCount()));
  }, [item, cartData]);

  return (
    <Box
      key={item._id}
      borderTop={"1px solid #f1f1f1"}
      p={{ base: "10px 10px 10px 10px", md: "10px 30px 10px 20px" }}
    >
      <Flex justifyContent={"space-between"} alignItems={"center"} gap={3}>
        <Link
          to={`/products/${item._id}`}
          style={{ textDecoration: "none" }}
          onClick={() => {
            onClose();
            setQuery("");
          }}
        >
          <Flex
            justifyContent={"space-between"}
            alignItems={"center"}
            // gap={2}
          >
            <Box
              pr={{ base: "10px", md: "20px" }}
              display={["none", "block", "block"]}
            >
              <Box
                w={"66px"}
                h={"66px"}
                p={"5px"}
                bg={"#f9f9f9"}
                border={"1px solid #eee"}
                rounded={"4px"}
              >
                <Image src={item?.imageUrl} height={"100%"} />
              </Box>
            </Box>

            <Flex
              gap={"10px"}
              w={{ base: "190px", md: "220px" }}
              p={"0 5px"}
              fontSize="13px"
              lineHeight={"15px"}
              textAlign={"left"}
              color={"#212121"}
              alignItems={"flex-start"}
              flexDirection="column"
              justifyContent={"space-evenly"}
            >
              <Text noOfLines={2}>{item?.productName}</Text>
              <Text fontSize={"12px"} color={"#616161"} noOfLines={2}>
                {item?.shortDesc}
              </Text>
            </Flex>

            <Box
              fontSize="13px"
              m="0 !important"
              flex={1}
              p={"0 5px"}
              textAlign="center"
            >
              <Text fontSize="14px" fontWeight={500} color={"black"}>
                ₹ {item?.price}
              </Text>

              <Flex
                flexDirection={{ base: "column", md: "row" }}
                alignItems={"center"}
                fontSize="12px"
                fontWeight={600}
                gap={"3px"}
              >
                <Text color="#5ac265" lineHeight="16px">
                  {item.discount}% off
                </Text>
                <Text lineHeight="16px" color={"#757575"}>
                  MRP{" "}
                  <Text as={"span"} textDecoration={"line-through"}>
                    {" ₹"}
                    {item.strikedPrice}
                  </Text>
                </Text>
              </Flex>
            </Box>
          </Flex>
        </Link>

        <Flex justifyContent={"space-between"} w={"82px"}>
          <Stack>
            {!!item?.soldOut ? (
              <Text fontSize={"13px"} color={"red.300"}>
                Out of Stock
              </Text>
            ) : (
              <Flex justifyContent="center" alignItems={"center"}>
                <Stack>
                  {countValue == 0 ? (
                    <AddToCartBtn
                      key={item.id}
                      onClick={() => handleAddToCart(item)}
                    >
                      {addCartItem.loading && addCartItem._id === item._id ? (
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
                          handleUpdate(item?._id, Number(countValue) - 1)
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
                        {updateCartItem?.loading &&
                        updateCartItem?._id == item?._id ? (
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
                          handleUpdate(item?._id, Number(countValue) + 1);
                        }}
                      >
                        <i className="fa-solid fa-plus"></i>
                      </CartInc>
                    </Flex>
                  )}
                </Stack>
              </Flex>
            )}
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
};

export default SingleProduct;

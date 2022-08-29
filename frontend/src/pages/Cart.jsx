import React from "react";
// import axios from "axios"
import { useState, useEffect } from "react";
import styles from "./Cart.module.css";
import { Total } from "../components/CartComponents/Total";
import Buttons from "../components/CartComponents/Button";
import emptyCart from "../assets/empty-cart-icon.svg";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  getCartItemAPI,
  removeItemFromCartAPI,
  updateCartItemAPI,
} from "../store/cart/cart.actions";
import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Heading,
  Image,
  Spinner,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import styled from "styled-components";
import ProductSlider2 from "../components/Home/ProductSlider2";
import { getSliderProductAPI } from "../store/newProduct/products.actions";
import ProductSliderCart from "../components/Cart/ProductSliderCart";
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
// const cartdata = [
//   {
//     _id: 1,
//     productName: "Paracetamol",
//     price: 4564,
//     shortDesc: 451,
//     strikedPrice: 5452,
//   },
//   {
//     _id: 2,
//     productName: "ABCd",
//     price: 456,
//     shortDesc: 451,
//     strikedPrice: 545,
//   },
// ];
const Cart = () => {
  const { require, isAuth } = useSelector((store) => store.auth);
  const { data: cartData, getCartItems } = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // console.log("total:", getCartItems.withoutDiscountPrice);
  // console.log("discount:", getCartItems.withDiscountPrice);
  const { loading, TopSellers, Trendingnow, dealoftheday } = useSelector(
    (store) => store.products.getSlider
  );
  useEffect(() => {
    if (!TopSellers.length) {
      dispatch(getSliderProductAPI());
    }
  }, [dispatch, getSliderProductAPI]);
  useEffect(() => {
    dispatch(getCartItemAPI());
  }, [dispatch, getCartItemAPI]);
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  const handleCheckout = () => {
    if (isAuth) {
      navigate("/cart/address-page");
    } else {
      require.setMethod(true);
      require.onOpenAuth();
    }
  };
  const button = {
    bg: "#ff6f61",
    text: "CHECKOUT",
    width: "98%",
    br: "0px",
    color: "#ffffff",
    height: "50px",
    fontSize: "18px",
  };

  if (!cartData.length) {
    return (
      <Container width={"100%"} pb={"200px"}>
        <Box textAlign="center" mt={"50px"}>
          <Image src={emptyCart} m={"auto"} height={"150px"} />
          <Heading fontSize={"22px"} mt="10px">
            Oops!
          </Heading>
          <Text mt="10px">Looks like there is no item in your cart yet.</Text>
          <Button
            mt="10px"
            background={"#ff6f61"}
            color={"white"}
            _hover={{ backgroundColor: "#ff6f61" }}
            _active={{ backgroundColor: "#ff6f61" }}
            onClick={() => navigate("/products")}
          >
            ADD MEDICINES
          </Button>
        </Box>
      </Container>
    );
  }

  return (
    <div className={styles.BlogContainer}>
      {/* left side */}

      <div className={styles.leftcart}>
        <div>
          <p>Items NOT Requiring Prescription ({cartData.length})</p>
          {cartData.length &&
            cartData.map((el, i) => <CartComponent cartItem={el} key={i} />)}
        </div>

        <Box mt={"35px"}>
          <Text fontSize={"3xl"} textAlign={"left"} fontWeight={300}>
            Top Sellers From Healthvit
          </Text>
          <Divider color={"#ccc"} />
          <ProductSliderCart data={TopSellers} loading={loading} />
        </Box>
        <Box mt={"35px"}>
          <Text fontSize={"3xl"} textAlign={"left"} fontWeight={300}>
            Deals of the day
          </Text>
          <Divider color={"#ccc"} />
          <ProductSliderCart data={dealoftheday} loading={loading} />
        </Box>
      </div>

      {/* right side */}
      <div className={styles.BlogRightContainer}>
        <div className={styles.careplan}>
          <img
            width={"100px"}
            src="https://onemg.gumlet.io/image/upload/v1625657833/ekjkxafxcqqg0oinr3fu.png"
          />
          <p>You can save extra ₹23 on this order</p>
          <h4>Become a member</h4>
          <p>
            Care plan membership{" "}
            <span className={styles.BlogCutPrice}>₹165</span> ₹549 / 3 months
          </p>
          <div className={styles.knowmore}>
            <div>
              <p>Know More</p>
            </div>
            <div>
              <p>Add to cart</p>
            </div>
          </div>
          <hr />
          <div className={styles.coupon}>
            <div>
              <img src="https://res.cloudinary.com/du8msdgbj/image/upload/v1607414999/marketing/cvtnx1zh5we6atn3m7i0.svg" />
              <h4>Apply Coupon</h4>
            </div>
            <div>
              <img
                width="25px"
                heigth="25px"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS90vvlMUz57tkjGsbZaZ-wpfjur6Epkp_6Pg&usqp=CAU"
              />
            </div>
          </div>
        </div>
        <div className={styles.health}>
          <div>
            <p>Check the health of your vital organs</p>
          </div>
          <div>
            <label>
              <input type="checkbox" />
              Book Good Health Silver Package for just ₹649
            </label>
            <p className={styles.Bloghealthpara}>
              Get the tests done easily from your home. This package will help
              you in identifying potential disorders and deficiencies at an
              early stage.
            </p>
            <p>Pay later on home sample collection</p>
          </div>
        </div>
        <div className={styles.coins}>
          <div className={styles.coinsdata}>
            <div>
              <img src="https://res.cloudinary.com/du8msdgbj/image/upload/v1645088829/210921_TataNeu_appicon_light_24px_circle_3_1x_vxwibw.png" />
              <p>My NeuCoins</p>
            </div>
            <div>
              <p>Balance: 0 NeuCoin</p>
            </div>
          </div>
          <hr />
          <div className={styles.neucoins}>
            <p>4 NeuCoins to be earned on this order*</p>
            <p>Extra 23 NeuCoins for care Plan members</p>
            <p>Add care plan to cart</p>
          </div>
        </div>
        <div>
          <Total getCartItems={getCartItems} />
        </div>
        <div className={styles.deliverylocation}>
          <div className={styles.location}>
            <p>Your delivery location</p>
            <p>Gaya</p>
          </div>
          <div className={styles.location1}>
            <Buttons styles={button} onClick={handleCheckout} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

const CartComponent = ({ cartItem }) => {
  const dispatch = useDispatch();
  const {
    data: cartData,
    getCartItems,
    addCartItem,
    updateCartItem,
  } = useSelector((state) => state.cart);
  // console.log("cart items:", cartItem);

  const handleUpdate = (id, value) => {
    console.log("update state", id, value);
    // let update = cartData.filter((data) => data.productId == id);
    // console.log("update state", id, value, update);
    // console.log("update state",cartData,cartItem);

    if (value == 0) {
      dispatch(removeItemFromCartAPI(id));
    } else {
      const payload = {
        cartId: id,
        _productId: id,
        newCount: value,
      };
      dispatch(updateCartItemAPI(payload));
    }
  };

  const handleRemoveFromCart = (id) => {
    dispatch(removeItemFromCartAPI(id));
  };

  useEffect(() => {
    dispatch(getCartItemAPI());
  }, []);
  return (
    <Box>
      <div key={cartItem._id} className={styles.cartdata}>
        <Box mt="10px" pt={"5px"}>
          <Text fontWeight={600} fontSize={"16px"}>
            {cartItem.productName}
          </Text>
          <h3>{Number(cartItem.price) * Number(cartItem?.count)}</h3>
        </Box>
        <div>
          <p>{cartItem.shortDesc}</p>
          <p>
            MRP: {" ₹"}
            <s>{Number(cartItem.strikedPrice) * Number(cartItem?.count)}</s>
          </p>
        </div>
        <div className={styles.removebuttondiv}>
          <div
            onClick={() => handleRemoveFromCart(cartItem._id)}
            className={styles.deleteCart}
          >
            <img src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png" />

            <p>Remove</p>
          </div>

          {/* <div className={styles.Countcart}> */}
          <Flex>
            <CartDec
              onClick={() =>
                handleUpdate(cartItem?._id, Number(cartItem?.count) - 1)
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
              updateCartItem?._id === cartItem?._id ? (
                <CardCount>
                  <Spinner speed="0.65s" size="xs" />
                </CardCount>
              ) : (
                <CardCount>{cartItem?.count}</CardCount>
              )}
            </Tooltip>

            <CartInc
              disabled={cartItem?.count >= 5}
              onClick={() => {
                handleUpdate(cartItem?._id, Number(cartItem?.count) + 1);
              }}
            >
              <i className="fa-solid fa-plus"></i>
            </CartInc>
          </Flex>
          {/* </div> */}
        </div>
      </div>
    </Box>
  );
};

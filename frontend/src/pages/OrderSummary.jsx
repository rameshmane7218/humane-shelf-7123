import React from "react";
// import axios from "axios"
import { useState, useEffect } from "react";
import styles from "./Cart.module.css";
import { Total } from "../components/CartComponents/Total";
// import Button from "../components/CartComponents/Button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Box, Button, Text, useToast } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCartItemAPI,
  removeAllItemFromCartAPI,
} from "../store/cart/cart.actions";

const OrderSummary = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();
  // const [items, setItems] = useState([]);
  const { data: cartData, getCartItems } = useSelector((state) => state.cart);
  const [address, setAddress] = useState(
    JSON.parse(localStorage.getItem("address"))
  );
  const { userData } = useSelector((store) => store.auth);

  const [loading, setLoading] = useState(false);
  // console.log(address);
  // console.log("total:", getCartItems.withoutDiscountPrice);
  // console.log("discount:", getCartItems.withDiscountPrice);
  useEffect(() => {
    dispatch(getCartItemAPI());
  }, [dispatch, getCartItemAPI]);
  // useEffect(() => {

  // if (items) {
  // setItems(items);
  //   }
  // }, []);
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  const handleCheckout = () => {
    setLoading(true);
    axios
      .post("/pay", {
        description: `Payment for purchase of ${cartData.length} items`,
        amount: getCartItems.withDiscountPrice || "1000",
        name: `${address.customer}`,
        email: `${userData.email}`,
        phone: `${address.mobileno}`,
      })
      .then((res) => {
        console.log(res);
        if (res.data.success === true) {
          localStorage.setItem("orderDetails", JSON.stringify(res.data));
          dispatch(removeAllItemFromCartAPI());
          window.location.href = res.data.payment_request.longurl;
        } else {
          toast({
            title: "Something went wrong",
            description: `${JSON.stringify(res.data.message)}`,
            status: "error",
            position: "top-right",
            duration: 3000,
            isClosable: true,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const button = {
    bg: "#ff6f61",
    text: "PROCEED TO PAYMENT",
    width: "98%",
    br: "0px",
    color: "#ffffff",
    height: "50px",
    fontSize: "18px",
  };

  return (
    <div className={styles.BlogContainer}>
      {/* left side */}
      <div className={styles.leftcart}>
        <div className={styles.ordersummaryheading}>
          <p>Order Summary</p>
        </div>
        <div className={styles.ordersummaryYourItemheading}>
          <p>Your Items</p>
        </div>

        <div>
          <div className={styles.ordersummaryArrivingheading}>
            <p>Arriving tomorrow</p>
          </div>
          {cartData.length &&
            cartData.map((el) => (
              <div key={el._id} className={styles.OrderSummarydataMapDiv}>
                <div>
                  <img src={el.imageUrl} alt="item" />
                </div>
                <div>
                  <p>{el.productName}</p>
                  <p>{el.shortDesc}</p>
                </div>
                <div>
                  <p>₹{Number(el.price) * Number(el.count)}</p>
                  <p>
                    MRP: {" ₹"}
                    <s>{Number(el.strikedPrice) * Number(el.count)}</s>
                  </p>
                  <p>NeuCoins earned: 4</p>
                </div>
              </div>
            ))}
        </div>
        <Box
          fontSize={"10px"}
          borderTop={["", "", "1px solid #CBD5E0"]}
          marginTop="20px"
          p={"10px"}
        >
          <Text>
            *NeuCoins will be credited 7 days after your complete order is
            delivered in case of Products and in case of Lab Services NeuCoins
            will be credited within 24 hours from the time of generation of test
            report. NeuCoins will not be credited in case a return request is
            initiated for the order. NeuCoins are rounded to the nearest integer
            and the value of NeuCoins earned may change if total order value
            changes.
          </Text>
          <Text pt={"10px"}>
            **Coupon Discount value may change if the total order value changes.
          </Text>
          <Text pt={"10px"}>
            ***Items in your cart will always reflect the most recent price as
            compared to the prices in their product detail page.
          </Text>
        </Box>
      </div>

      {/* right side */}
      <div className={styles.BlogRightContainer}>
        <div className={styles.changeAddressDiv}>
          <div>Selected Address</div>
          <div>
            <Link to="/cart/address-page">CHANGE</Link>{" "}
          </div>
        </div>
        <div className={styles.changeAddress}>
          <Text fontWeight={600}>
            <p>{address.delivery}</p>
          </Text>
          <p>{address.customer}</p>
          <p>{address.mobileno}</p>
          <p>
            {address.building} {address.locality} {address.landmark}
          </p>
          <p>
            {address.city} {address.state}-{address.pincode}
          </p>
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
          <div className={styles.location1}>
            <Button
              isLoading={loading}
              loadingText="Loading..."
              width={"100%"}
              background={"#ff6f61"}
              color={"white"}
              _hover={{ backgroundColor: "#ff6f61" }}
              _active={{ backgroundColor: "#ff6f61" }}
              onClick={handleCheckout}
            >
              PROCEED TO PAYMENT
            </Button>
          </div>
        </div>
        <Box
          mt={"20px"}
          width={["100%", "100%"]}
          // p={["", "", "20px"]}
          borderTop={["", "", "1px solid #CBD5E0"]}
          fontSize={"10px"}
          mb={"20px"}
        >
          Tata 1mg is a technology platform to facilitate transaction of
          business. The products and services are offered for sale by the
          sellers. The user authorizes the delivery personel to be his agent for
          delivery of the goods. For details read{" "}
          <Text
            as="span"
            color="#ff6f61"
            cursor={"pointer"}
            _hover={{ textDecoration: "underline" }}
          >
            terms and conditions.
          </Text>
        </Box>
      </div>
    </div>
  );
};

export default OrderSummary;

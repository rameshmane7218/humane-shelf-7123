import React, { useEffect, useState } from "react";
import styles from "./Cart.module.css";
import { useNavigate } from "react-router-dom";
import { Box, Button, Flex, Text } from "@chakra-ui/react";

const Address = () => {
  const [address, setAddress] = useState({
    landmark: "",
    building: "",
    mobileno: "",
    pincode: "",
    locality: "",
    city: "",
    customer: "",
    state: "",
    delivery: "",
  });

  const [change, setChange] = useState(false);
  const [add, setAdd] = useState(false);
  const navigate = useNavigate();

  const handleaddAddress = () => {
    setChange(false);
  };
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setAddress({ ...address, [name]: value });
  };

  console.log(address);
  const handleSave = (e) => {
    e.preventDefault();
    setChange(true);
    localStorage.setItem("address", JSON.stringify(address));
  };
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div>
      {change || add ? (
        <div className={styles.addressdata}>
          <div className={styles.addressdata1}>
            <div>
              <img
                width="30px"
                src="https://image.shutterstock.com/image-vector/screen-record-button-isolated-on-600w-1457333453.jpg"
              />
              <p>{address.delivery}</p>
            </div>
            <p>{address.customer}</p>
            <p>{address.mobileno}</p>
            <p>
              {address.building} {address.locality} {address.landmark}
            </p>
            <p>
              {address.city} {address.state}-{address.pincode}
            </p>
          </div>

          <div onClick={handleaddAddress}>+ ADD NEW ADDRESS</div>
          <div onClick={() => navigate("/cart/summary-page")}>CONTINUE</div>
          <Flex
            fontSize={"10px"}
            gap={"20px"}
            mt="40px"
            flexDirection={["column-reverse", "column-reverse", "row"]}
          >
            <Box
              width={["100%", "100%", "60%"]}
              p={["", "", "20px"]}
              borderTop={["", "", "1px solid #CBD5E0"]}
            >
              Tata 1mg is a technology platform to facilitate transaction of
              business. The products and services are offered for sale by the
              sellers. The user authorizes the delivery personel to be his agent
              for delivery of the goods. For details read{" "}
              <Text
                as="span"
                color="#ff6f61"
                cursor={"pointer"}
                _hover={{ textDecoration: "underline" }}
              >
                terms and conditions.
              </Text>
            </Box>
            <Box
              width={["100%", "100%", "40%"]}
              p={["", "", "20px"]}
              borderTop={["", "", "1px solid #CBD5E0"]}
            >
              <Text>
                *NeuCoins will be credited 7 days after your complete order is
                delivered in case of Products and in case of Lab Services
                NeuCoins will be credited within 24 hours from the time of
                generation of test report. NeuCoins will not be credited in case
                a return request is initiated for the order. NeuCoins are
                rounded to the nearest integer and the value of NeuCoins earned
                may change if total order value changes.
              </Text>
              <Text pt={"10px"}>
                **Coupon Discount value may change if the total order value
                changes.
              </Text>
              <Text pt={"10px"}>
                ***Items in your cart will always reflect the most recent price
                as compared to the prices in their product detail page.
              </Text>
            </Box>
          </Flex>
        </div>
      ) : (
        <div className={styles.address}>
          <p className={styles.addressPTag}>Add New Adddress</p>
          <div className={styles.addressform}>
            <form className={styles.form} onSubmit={handleSave}>
              <input
                type="text"
                name="building"
                placeholder="Flat Number Building Name , Street/Locality"
                onChange={handleOnChange}
                required
              />
              <br />
              <input
                type="text"
                name="landmark"
                placeholder="Landmark(optional)"
                onChange={handleOnChange}
              />
              <br />
              <input
                type="number"
                name="pincode"
                placeholder="Pincode"
                onChange={handleOnChange}
                required
              />
              <br />
              <input
                type="text"
                name="locality"
                placeholder="Locality"
                onChange={handleOnChange}
              />
              <br />
              <input
                type="text"
                name="city"
                placeholder="City"
                onChange={handleOnChange}
              />
              <br />
              <input
                type="text"
                name="state"
                placeholder="State"
                onChange={handleOnChange}
              />
              <br />
              <input
                type="text"
                name="customer"
                placeholder="Customer Name"
                onChange={handleOnChange}
                required
              />
              <br />
              <input
                type="number"
                name="mobileno"
                placeholder="10 Digit Mobile Number"
                onChange={handleOnChange}
                required
              />
              <div className={styles.office}>
                <p>
                  <input
                    type="radio"
                    name="delivery"
                    className={styles.addressfromCheckBox}
                    value="home"
                    onChange={handleOnChange}
                    required
                  />
                  HOME
                </p>
                <p>
                  <input
                    type="radio"
                    name="delivery"
                    className={styles.addressfromCheckBox}
                    value="office"
                    onChange={handleOnChange}
                    required
                  />
                  OFFICE
                </p>
                <p>
                  <input
                    type="radio"
                    name="delivery"
                    className={styles.addressfromCheckBox}
                    value="other"
                    onChange={handleOnChange}
                    required
                  />
                  OTHER
                </p>
              </div>
              <div>
                <div className={styles.savedata}>
                  <p>CANCEL</p>
                  <Button
                    lineHeight={1}
                    type="submit"
                    background={"#ff6f61"}
                    color={"white"}
                    _hover={{ backgroundColor: "#ff6f61" }}
                    _active={{ backgroundColor: "#ff6f61" }}
                  >
                    SAVE
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Address;

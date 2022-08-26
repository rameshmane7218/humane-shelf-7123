import { Button, useDisclosure, useToast } from "@chakra-ui/react";
import React from "react";
import Auth from "../components/Navbar/Auth";
import axios from "axios";
import { useSelector } from "react-redux";
const Payment = () => {
  const toast = useToast();
  const { require } = useSelector((store) => store.auth);
  const handleCheckout = () => {
    axios
      .post("http://localhost:5000/pay", {
        description: "1mg product purchase test mode",
        amount: "1000",
        name: "Ramesh Mane",
        email: "ramesh@gmail.com",
        phone: "7218416746",
      })
      .then((res) => {
        console.log(res);
        if (res.data.success === true) {
          window.location.href = res.data.payment_request.longurl;
        } else {
          toast({
            title: "Something went wrong",
            status: "error",
            position: "top-right",
            duration: 3000,
            isClosable: true,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      Payment
      {/* <Auth /> */}
      <Button onClick={handleCheckout}>Payment</Button>
      
    </div>
  );
};

export default Payment;

import { Button } from "@chakra-ui/react";
import React from "react";
import Auth from "../components/Navbar/Auth";
import axios from "axios";
const Payment = () => {
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
        window.location.href = res.data.payment_request.longurl;
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      Payment
      <Auth />
      <Button onClick={handleCheckout}>Payment</Button>
    </div>
  );
};

export default Payment;

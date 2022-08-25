import React, { useEffect } from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Image,
  Input,
  InputGroup,
  InputLeftAddon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  PinInput,
  PinInputField,
  Text,
  useToast,
} from "@chakra-ui/react";
import AuthSlider from "./AuthSlider";
import { v4 as uuidv4 } from "uuid";
import { Swiper, SwiperSlide } from "swiper/react";
import pic_one from "../../assets/Navbar/auth/one.png";
import pic_two from "../../assets/Navbar/auth/two.png";
import pic_three from "../../assets/Navbar/auth/three.png";
import pic_four from "../../assets/Navbar/auth/four.png";
import pic_five from "../../assets/Navbar/auth/five.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Slider from "react-slick";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { useState } from "react";
import { auth } from "../../firebase/config";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
const Login = ({ setMethod, initialRef, finalRef }) => {
  const [stage, setStage] = useState(1);
  const [userNumber, setUserNumber] = useState("");
  const [result, setResult] = useState();
  return (
    <>
      <Box>
        {stage == 1 ? (
          <Stage1
            userNumber={userNumber}
            setUserNumber={setUserNumber}
            setStage={setStage}
            setMethod={setMethod}
            result={result}
            setResult={setResult}
            initialRef={initialRef}
            finalRef={finalRef}
          />
        ) : stage == 2 ? (
          <Stage2 userNumber={userNumber} setStage={setStage} result={result} />
        ) : (
          <Box>SignUp</Box>
        )}
      </Box>
    </>
  );
};

export default Login;

const Stage1 = ({
  userNumber,
  setUserNumber,
  setStage,
  setMethod,
  result,
  setResult,
  initialRef,
}) => {
  const [loading, setLoading] = useState(false);
  const [invalid, setInvalid] = useState(false);
  const toast = useToast();
  const handleOnchange = (e) => {
    setInvalid(false);
    const { value } = e.target;
    setUserNumber(value);
    // console.log("user is typing", value);
  };
  const handleSendOtp = (e) => {
    e.preventDefault();
    if (userNumber.length < 10) {
      setInvalid(true);
    } else {
      if (isNaN(Number(userNumber))) {
        setInvalid(true);
      } else {
        // sendOtp(2000);
        setLoading(true);
        onSignInSubmit();
      }
    }
  };
  const sendOtp = (delay) => {
    setLoading(true);
    setTimeout(() => {
      toast({
        title: `${generateOTP()} is your OTP.`,
        description: ` valid for 1 min`,
        status: "info",
        position: "top-right",
        duration: 7000,
        isClosable: true,
      });
      setLoading(false);
      setStage(2);
    }, delay);
  };

  const setupRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          onSignInSubmit();
        },
      },
      auth
    );
  };
  const onSignInSubmit = (e) => {
    // e.preventDefault();
    setupRecaptcha();
    const phoneNumber = `+91${userNumber}`;
    const appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        // ...
        setResult(confirmationResult);
        setStage(2);
        // const code = window.prompt();
        // confirmationResult
        //   .confirm(code)
        //   .then((result) => {
        //     // User signed in successfully.
        //     const user = result.user;
        //     // ...
        //     console.log("sign in successful", user);
        //   })
        //   .catch((error) => {
        //     // User couldn't sign in (bad verification code?)
        //     // ...
        //     console.log("sign in error", error);
        //   });
      })
      .catch((error) => {
        // Error; SMS not sent
        // ...
      });
  };

  return (
    <Box>
      <form onSubmit={handleSendOtp}>
        <div id="recaptcha-container"></div>
        <Flex
          flexDirection={"column"}
          justifyContent="space-between"
          gap={"80px"}
        >
          <Box>
            <Box>
              <Heading fontSize={"28px"} fontWeight={700}>
                Login
              </Heading>
            </Box>
            <Box m={"10px 0 60px"}>
              <Text fontSize={"12px"} color={"#616161"}>
                Get access to your orders, lab tests & doctor consultations
              </Text>
            </Box>
            <Box>
              <FormControl>
                <FormLabel color={"#616161"}>Enter Mobile Number</FormLabel>
                <InputGroup>
                  <InputLeftAddon children="+91" />
                  {/* <Input type="tel" placeholder="phone number" /> */}
                  <Input
                    ref={initialRef}
                    value={userNumber}
                    type={"text"}
                    maxLength="10"
                    onChange={handleOnchange}
                    required
                  />
                </InputGroup>
              </FormControl>
              <Text
                fontSize={"12px"}
                color="#d50000"
                display={invalid ? "visible" : "none"}
              >
                Please enter a valid 10 digit Mobile Number
              </Text>
            </Box>
          </Box>
          <Box>
            <Button
              type={"submit"}
              width={"100%"}
              isLoading={loading}
              loadingText="Sending..."
              colorScheme="orange"
            >
              {userNumber.length > 1 ? "SEND OTP" : "LOGIN"}
            </Button>
            <Box textAlign={"center"} mt="16px">
              <Box>
                <Text>
                  New on 1mg?{" "}
                  <Text
                    as="span"
                    color="#ff6f61"
                    fontWeight={"bold"}
                    cursor="pointer"
                    onClick={() => setMethod(false)}
                  >
                    Sign Up
                  </Text>
                </Text>
              </Box>
              <Box mt={"16px"}>
                <Text fontSize={"13px"} color={"#616161"}>
                  By logging in, you agree to our
                </Text>
                <Text fontSize={"13px"} color={"#616161"}>
                  <Text
                    as={"span"}
                    textDecoration={"underline"}
                    cursor={"pointer"}
                  >
                    Terms and Conditions
                  </Text>{" "}
                  &{" "}
                  <Text
                    as={"span"}
                    textDecoration={"underline"}
                    cursor={"pointer"}
                  >
                    Privacy Policy
                  </Text>
                </Text>
                <Text
                  color="#ff6f61"
                  fontWeight={"bold"}
                  cursor="pointer"
                  fontSize={"13px"}
                >
                  Need Help? Get In Touch
                </Text>
              </Box>
            </Box>
          </Box>
        </Flex>
      </form>
    </Box>
  );
};
const Stage2 = ({ userNumber, setStage, result }) => {
  const [loading, setLoading] = useState(false);
  const [invalid, setInvalid] = useState(false);
  const [userOtp, setUserOtp] = useState("");
  // const [count, setCount] = useState(30);

  // useEffect(() => {
  //   let timerId = setInterval(() => {
  //     setCount((count) => count - 1);
  //   }, 1000);
  // }, []);
  const toast = useToast();
  const handleOnchange = (value) => {
    setInvalid(false);

    setUserOtp(value);
    // console.log("user is typing otp", value);
  };
  const handleVeriryOtp = (e) => {
    e.preventDefault();
    // console.log(userOtp);
    // let actualOtp = localStorage.getItem("MobileOtp");
    // if (userOtp == actualOtp) {
    //   console.log("Login successful");
    // } else {
    //   setInvalid(true);
    // }
    // const code = window.prompt();
    result
      .confirm(userOtp)
      .then((result) => {
        // User signed in successfully.
        const user = result.user;
        // ...
        console.log("sign in successful", user);
      })
      .catch((error) => {
        // User couldn't sign in (bad verification code?)
        // ...
        console.log("sign in error", error);
      });
  };
  const ResendOtp = (delay) => {
    setLoading(true);
    setTimeout(() => {
      toast({
        title: `${generateOTP()} is your OTP.`,
        description: ` valid for 1 min`,
        status: "info",
        position: "top-right",
        duration: 7000,
        isClosable: true,
      });
      setLoading(false);
    }, delay);
  };

  return (
    <Box p={"0 20px"}>
      <form onSubmit={handleVeriryOtp}>
        <Flex
          flexDirection={"column"}
          justifyContent="space-between"
          gap={"80px"}
        >
          <Box>
            <Box>
              <Heading fontSize={"28px"} fontWeight={700}>
                Verify OTP
              </Heading>
            </Box>
            <Box m={"10px 0 60px"}>
              <Text fontSize={"12px"} color={"#616161"}>
                Provide OTP sent to{" "}
                <Text as={"span"} fontWeight={"bold"}>
                  {userNumber}
                </Text>{" "}
                <Text
                  as="span"
                  color="#ff6f61"
                  fontWeight={"bold"}
                  cursor="pointer"
                  onClick={() => setStage(1)}
                >
                  Edit
                </Text>
              </Text>
            </Box>
            <Box>
              <FormLabel color={"#616161"}>One Time Password</FormLabel>

              <Flex justifyContent={"center"}>
                <HStack>
                  <PinInput
                    type="numeric"
                    name="otp"
                    size={"md"}
                    required
                    onChange={(value) => handleOnchange(value)}
                  >
                    <PinInputField required />
                    <PinInputField required />
                    <PinInputField required />
                    <PinInputField required />
                    <PinInputField required />
                    <PinInputField required />
                  </PinInput>
                </HStack>
              </Flex>
              <Text
                fontSize={"12px"}
                color="#d50000"
                display={invalid ? "visible" : "none"}
                mt="5px"
              >
                Uh-oh! Incorrect OTP
              </Text>

              <Text fontSize={"13px"} mt="20px">
                Resend in 0:30
              </Text>
              <Text
                mt="20px"
                color="#ff6f61"
                fontWeight={"bold"}
                cursor="pointer"
                display={invalid ? "visible" : "none"}
                onClick={() => ResendOtp(1000)}
              >
                Resend OTP
              </Text>
            </Box>
          </Box>
          <Box>
            <Button
              type={"submit"}
              width={"100%"}
              isLoading={loading}
              loadingText="Sending..."
              colorScheme="orange"
            >
              DONE
            </Button>
            <Box textAlign={"center"} mt="56px">
              <Text
                color="#ff6f61"
                fontWeight={"bold"}
                cursor="pointer"
                fontSize={"13px"}
              >
                Need Help? Get In Touch
              </Text>
            </Box>
          </Box>
        </Flex>
      </form>
    </Box>
  );
};

const generateOTP = () => {
  let digits = "0123456789";
  let otpLength = 6;
  let otp = "";
  for (let i = 1; i <= otpLength; i++) {
    let index = Math.floor(Math.random() * digits.length);
    otp = otp + digits[index];
  }
  localStorage.setItem("MobileOtp", otp);
  return otp;
};

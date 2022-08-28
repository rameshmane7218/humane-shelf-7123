import React, { useEffect } from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputLeftAddon,
  PinInput,
  PinInputField,
  Text,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";

// import required modules
import { useDispatch, useSelector } from "react-redux";
import { userLoginAPI } from "../../store/authentication/auth.actions";
import { useState } from "react";
import { auth } from "../../firebase/config";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
const Login = ({ setMethod, initialRef, finalRef, setSuccessful }) => {
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
          <Stage2
            userNumber={userNumber}
            setStage={setStage}
            result={result}
            setSuccessful={setSuccessful}
          />
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
  setResult,
  initialRef,
}) => {
  const [loading, setLoading] = useState(false);
  const [invalid, setInvalid] = useState(false);
  const [message, setMessage] = useState("");

  const handleOnchange = (e) => {
    if (invalid) {
      setInvalid(false);
    }
    if (message.length) {
      setMessage("");
    }
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

        axios
          .post("/user/checkmobile", { mobile: userNumber })
          .then((res) => {
            if (res.data.status != true) {
              setMessage(res.data.message);
              setInvalid(true);
              setLoading(false);
            } else {
              onSignInSubmit();
            }
          })
          .catch(() => {
            setLoading(false);
          });
      }
    }
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
    // setupRecaptcha();
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
      })
      .catch((error) => {
        // Error; SMS not sent
        // ...
        setInvalid(true);
        setLoading(false);
        console.log("error11", error);
      });
  };
  useEffect(() => {
    setupRecaptcha();
  }, []);

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
                {message
                  ? message
                  : "Please enter a valid 10 digit Mobile Number"}
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
const Stage2 = ({ userNumber, setStage, result, setSuccessful }) => {
  const dispatch = useDispatch();
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
    if (invalid) {
      setInvalid(false);
    }
    setUserOtp(value);
  };

  const handleVeriryOtp = (e) => {
    e.preventDefault();
    setLoading(true);
    result
      .confirm(userOtp)
      .then((result) => {
        // User signed in successfully.
        const user = result.user;
        // ...
        console.log("sign in successful", user);
        dispatch(userLoginAPI({ mobile: userNumber, token: user.accessToken }));
        setTimeout(() => {
          setSuccessful(true);
        }, 2000);
      })
      .catch((error) => {
        // User couldn't sign in (bad verification code?)
        // ...
        setInvalid(true);
        console.log("sign in error", error);
      })
      .finally(() => {
        setLoading(false);
      });
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

              {/* <Text fontSize={"13px"} mt="20px">
                Resend in 0:30
              </Text>
              <Text
                mt="20px"
                color="#ff6f61"
                fontWeight={"bold"}
                cursor="pointer"
                display={invalid ? "visible" : "none"}
                // onClick={() => ResendOtp(1000)}
              >
                Resend OTP
              </Text> */}
            </Box>
          </Box>
          <Box>
            <Button
              type={"submit"}
              width={"100%"}
              isLoading={loading}
              loadingText="Verifying..."
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

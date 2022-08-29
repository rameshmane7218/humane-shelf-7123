import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  Switch,
  Text,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { BsPerson, BsChevronRight } from "react-icons/bs";
import Footer from "../components/Footer";
const Profile = () => {
  const { require, isAuth, userData } = useSelector((store) => store.auth);
  //   console.log("User Data", userData);
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <Box>
      <Box width="80%" margin={"auto"} pb={"200px"}>
        <Flex gap={"20px"} flexDirection={["column", "column", "row"]}>
          <Box
            boxShadow={"0 0 4px rgb(0 0 0 / 8%), 0 4px 4px rgb(0 0 0 / 8%);"}
            width={["100%", "100%", "60%"]}
            backgroundColor={"white"}
            rounded={"md"}
          >
            <Box height={"80px"} borderBottom={"1px solid #CBD5E0"} p={"10px"}>
              <Heading>Hi, there</Heading>
            </Box>
            <Flex height={"80px"} borderBottom={"1px solid #CBD5E0"} p={"10px"}>
              <Flex
                width={"60px"}
                alignItems="center"
                justifyContent={"center"}
                fontSize={"28px"}
              >
                <BsPerson p={"10px"} />
              </Flex>
              <Flex flexDirection={"column"} justifyContent={"center"}>
                <Text color={"#767676"} fontSize={"13px"}>
                  Full Name
                </Text>
                <Text color={"#3b3b3b"} fontSize={"14px"} fontWeight={"bold"}>
                  {`${userData.firstName} ${userData.lastName}` ||
                    "dummyemail@gmail.com"}
                </Text>
              </Flex>
            </Flex>
            <Flex height={"80px"} borderBottom={"1px solid #CBD5E0"} p={"10px"}>
              <Flex width={"60px"} alignItems="center">
                <Image
                  height={"48px"}
                  src={
                    "https://onemg.gumlet.io/image/upload/v1638281596/yl5o4t3xslirp8kathah.png"
                  }
                />
              </Flex>
              <Flex flexDirection={"column"} justifyContent={"center"}>
                <Text color={"#767676"} fontSize={"13px"}>
                  Email address
                </Text>
                <Text color={"#3b3b3b"} fontSize={"14px"} fontWeight={"bold"}>
                  {userData.email || "dummyemail@gmail.com"}
                </Text>
              </Flex>
            </Flex>

            <Flex height={"80px"} p={"10px"}>
              <Flex width={"60px"} alignItems="center">
                <Image
                  height={"48px"}
                  src={
                    "https://onemg.gumlet.io/image/upload/v1638281620/kt40wjhqxqdrjpgzvc73.png"
                  }
                />
              </Flex>
              <Flex flexDirection={"column"} justifyContent={"center"}>
                <Text color={"#767676"} fontSize={"13px"}>
                  Mobile Number
                </Text>
                <Text color={"#3b3b3b"} fontSize={"14px"} fontWeight={"bold"}>
                  {userData.mobile || "9999999999"}
                </Text>
              </Flex>
            </Flex>
          </Box>
          <Flex
            width={["100%", "100%", "40%"]}
            flexDirection={"column"}
            gap={"20px"}
          >
            <Flex
              width={"100%"}
              height={"80px"}
              borderBottom={"1px solid #CBD5E0"}
              p={"10px"}
              boxShadow={"0 0 4px rgb(0 0 0 / 8%), 0 4px 4px rgb(0 0 0 / 8%);"}
              backgroundColor={"white"}
              rounded={"md"}
            >
              <Flex
                width={"60px"}
                alignItems="center"
                justifyContent={"center"}
                fontSize={"28px"}
              >
                <Image
                  height={"48px"}
                  src={
                    "https://onemg.gumlet.io/image/upload/v1638281747/nzzgxx5xqbtcwmwbvanv.png"
                  }
                />
              </Flex>
              <Flex
                justifyContent={"space-between"}
                alignItems={"center"}
                flex={1}
              >
                <Flex flexDirection={"column"} justifyContent={"center"}>
                  <Text color={"#333333"} fontSize={"13px"}>
                    My NeuCoins
                  </Text>
                  <Text color={"#3b3b3b"} fontSize={"12px"}>
                    You have 0 NeuCoins in your wallet
                  </Text>
                </Flex>
                <Box>
                  <BsChevronRight />
                </Box>
              </Flex>
            </Flex>

            <Flex
              width={"100%"}
              height={"100px"}
              borderBottom={"1px solid #CBD5E0"}
              p={"10px"}
              boxShadow={"0 0 4px rgb(0 0 0 / 8%), 0 4px 4px rgb(0 0 0 / 8%);"}
              backgroundColor={"white"}
              rounded={"md"}
              justifyContent={"space-between"}
              gap={"10px"}
            >
              <Flex
                flexDirection={"column"}
                justifyContent={"center"}
                gap={"10px"}
              >
                <Text color={"#333333"} fontSize={"14px"} fontWeight={"bold"}>
                  Subscribe to marketing emails
                </Text>
                <Text color={"#3b3b3b"} fontSize={"12px"}>
                  We will send you the latest offers, best products and updated
                  medical information to your email address
                </Text>
              </Flex>
              <Flex
                width={"60px"}
                alignItems="center"
                justifyContent={"center"}
                fontSize={"28px"}
              >
                <Switch colorScheme="red" />
              </Flex>
            </Flex>
            <Flex
              width={"100%"}
              height={"100px"}
              borderBottom={"1px solid #CBD5E0"}
              p={"10px"}
              boxShadow={"0 0 4px rgb(0 0 0 / 8%), 0 4px 4px rgb(0 0 0 / 8%);"}
              backgroundColor={"white"}
              rounded={"md"}
              justifyContent={"space-between"}
              gap={"10px"}
            >
              <Flex
                flexDirection={"column"}
                justifyContent={"center"}
                gap={"10px"}
              >
                <Text color={"#333333"} fontSize={"14px"} fontWeight={"bold"}>
                  Get whatsapp notifications
                </Text>
                <Text color={"#3b3b3b"} fontSize={"12px"}>
                  We will send you the latest notifications related to your
                  orders and lab reports to your mobile number
                </Text>
              </Flex>
              <Flex
                width={"60px"}
                alignItems="center"
                justifyContent={"center"}
                fontSize={"28px"}
              >
                <Switch colorScheme="red" />
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default Profile;

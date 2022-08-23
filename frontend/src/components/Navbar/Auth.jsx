import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
  useDisclosure,
  Box,
  Flex,
  FormLabel,
  Heading,
  Image,
  Input,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
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
const Auth = () => {
  const [data, setData] = useState(sliderData);
  const {
    isOpen: isOpenAuth,
    onOpen: onOpenAuth,
    onClose: onCloseAuth,
  } = useDisclosure();

  const [method, setMethod] = useState(true);
  return (
    <div>
      Auth
      <Button
        onClick={() => {
          setMethod(true);
          onOpenAuth();
        }}
      >
        Open Login
      </Button>
      <Button
        onClick={() => {
          setMethod(false);
          onOpenAuth();
        }}
      >
        Open Signup
      </Button>
      <Modal isOpen={isOpenAuth} onClose={onCloseAuth}>
        <ModalOverlay />
        <ModalContent maxW={"900px"} minH="440px">
          <ModalCloseButton onClick={onCloseAuth} />

          <ModalBody>
            <Flex>
              <Swiper
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={false}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
              >
                {data.map((item, index) => (
                  <Box key={uuidv4()}>
                    <SwiperSlide key={uuidv4()}>
                      <Box textAlign={"center"}>
                        <Flex justifyContent={"center"}>
                          <Image src={item.imgUrl} height="auto" />
                        </Flex>
                        <Box>
                          <Heading fontSize={"20px"}>{item.title}</Heading>
                        </Box>
                        <Box fontSize={"14px"}>{item.text}</Box>
                      </Box>
                    </SwiperSlide>
                  </Box>
                ))}
              </Swiper>

              <Box
                width={"50%"}
                borderLeft={"1px solid gray"}
                p="0 50px"
                mt="16px"
              >
                {method ? <Login setMethod={setMethod}/> : <Box>SignUp</Box>}
              </Box>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Auth;

const sliderData = [
  {
    imgUrl: pic_one,
    title: "Make Healthcare Simpler",
    text: "Get medicine information, order medicines, book lab tests and consult doctors online from the comfort of your home.",
  },
  {
    imgUrl: pic_two,
    title: "Know Your Medicines",
    text: "View medicine information like usage, side effects and cheaper substitutes before you take them.",
  },
  {
    imgUrl: pic_three,
    title: "Medicines, Home Delivered",
    text: "Order any medicine or health product and we’ll deliver it for free. Enjoy discounts on everything.",
  },
  {
    imgUrl: pic_four,
    title: "Lab Tests at Home",
    text: "Book any test from any lab. We'll collect the sample and send the reports. Save up to 80% every time.",
  },
  {
    imgUrl: pic_five,
    title: "Health Related Queries?",
    text: "Consult our certified doctors from anywhere, anytime, and for free. We guarantee your privacy.",
  },
];
import React from "react";
import { Box, Heading, Image } from "@chakra-ui/react";
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

const AuthSlider = () => {
  const [data, setData] = useState(sliderData);
  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Box>
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
          <Box key={index}>
            <SwiperSlide>
              <Box>
                <Box>
                  <Image src={item.imgUrl} height="auto" />
                </Box>
                <Box>
                  <Heading>{item.title}</Heading>
                </Box>
                <Box>{item.text}</Box>
              </Box>
            </SwiperSlide>
          </Box>
        ))}
      </Swiper>

      {/* <Box> Text</Box> */}
      {/* <Slider {...settings}>
        {data.map((item, index) => (
          <Box key={item.id}>
            <Box>
              <Image src={item.imgUrl} height="auto" />
            </Box>
            <Box>
              <Heading>{item.title}</Heading>
            </Box>
            <Box>{item.text}</Box>
          </Box>
        ))}
      </Slider> */}
    </Box>
  );
};

export default AuthSlider;

const sliderData = [
  {
    id: uuidv4(),
    imgUrl: pic_one,
    title: "Make Healthcare Simpler",
    text: "Get medicine information, order medicines, book lab tests and consult doctors online from the comfort of your home.",
  },
  {
    id: uuidv4(),
    imgUrl: pic_two,
    title: "Know Your Medicines",
    text: "View medicine information like usage, side effects and cheaper substitutes before you take them.",
  },
  {
    id: uuidv4(),
    imgUrl: pic_three,
    title: "Medicines, Home Delivered",
    text: "Order any medicine or health product and we’ll deliver it for free. Enjoy discounts on everything.",
  },
  {
    id: uuidv4(),
    imgUrl: pic_four,
    title: "Lab Tests at Home",
    text: "Book any test from any lab. We'll collect the sample and send the reports. Save up to 80% every time.",
  },
  {
    id: uuidv4(),
    imgUrl: pic_five,
    title: "Health Related Queries?",
    text: "Consult our certified doctors from anywhere, anytime, and for free. We guarantee your privacy.",
  },
];

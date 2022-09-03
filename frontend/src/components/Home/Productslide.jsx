import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./slider2.css";

import { Navigation } from "swiper";
import { Box, Heading, Text, Image, Stack, Link, Flex } from "@chakra-ui/react";
import { TopSellers } from "./SliderData";
import { StarIcon } from "@chakra-ui/icons";
import { BiRupee } from "react-icons/bi";

export const Productslide = ({ items }) => {
  // console.log(items);
  return (
    <Box boxShadow="base" height="320px" mb="5%">
      <Swiper
        slidesPerView={6}
        spaceBetween={10}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: false,
        }}
        breakpoints={{
          270: {
            slidesPerView: 1,
            spaceBetween: 5,
          },
          375: {
            slidesPerView: 2,
            spaceBetween: 5,
          },
          425: {
            slidesPerView: 3,
            spaceBetween: 5,
          },
          640: {
            slidesPerView: 4,
            spaceBetween: 5,
          },
          768: {
            slidesPerView: 5,
            spaceBetween: 5,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 10,
          },
        }}
        navigation={true}
        modules={[Navigation]}
        className="mainSwiper"
      >
        {items?.map((d, i) => {
          {
            {
              return (
                <SwiperSlide key={i} className="swiperProducts">
                  <Box
                    border={"1px solid #eee"}
                    transition={".3s"}
                    rounded={4}
                    height="auto"
                    bg={"white"}
                    _hover={{
                      transition: ".6s",
                      boxShadow: "0 0 9px 0 rgb(0 0 0 / 30%)",
                    }}
                    position={"relative"}
                    p={"10px"}
                  >
                    <Box
                      height="200px"
                      width="180px"
                      margin="auto"
                      pt="59%"
                      bg={"white"}
                      rounded={6}
                      position={"relative"}
                    >
                      <Link style={{ textDecoration: "none" }}>
                        <Image
                          src={d.imageUrl}
                          h="120px"
                          w="50%"
                          bg={"#f9f9f9"}
                          display="block"
                          m={"auto"}
                        />
                      </Link>
                    </Box>
                    <Box
                      h={"65px"}
                      // border={"1px solid blue"}
                      fontSize="14px"
                      fontWeight={"400"}
                      lineHeight="20px"
                      color={"#212121"}
                      // textOverflow={"ellipsis"}
                      textOverflow={"..."}
                      overflow="hidden"
                      mt="27%"
                    >
                      {d.productName}
                    </Box>
                    <Text
                      fontSize="12px"
                      fontWeight={"400"}
                      lineHeight="17px"
                      color={"#757575"}
                    >
                      {d.shortDesc}
                    </Text>

                    <Flex
                      mt={"5px"}
                      left="0"
                      flexDirection={"row"}
                      justifyContent="flex-start"
                      alignItems={"center"}
                    >
                      <Box
                        paddingLeft={"5px"}
                        flexDirection={"row"}
                        justifyContent="flex-start"
                        alignItems={"center"}
                        borderRadius={"2px"}
                        bg={"#1aab2a"}
                        color={"white"}
                        fontWeight={"bold"}
                        fontSize="12px"
                        pr={"5px"}
                      >
                        {d.ratings}{" "}
                        <StarIcon
                          marginTop={"-3px"}
                          color={"white"}
                          fontSize="10px"
                        />
                      </Box>
                      <Text marginLeft={3} fontSize="12px">
                        {d.numberOfRatings}
                      </Text>
                    </Flex>
                    <Flex
                      mt={"5px"}
                      paddingLeft={"2px"}
                      flexDirection={"row"}
                      justifyContent="flex-start"
                      alignItems={"center"}
                      borderRadius={"2px"}
                      fontSize="14px"
                      mb={"30px"}
                      // border={"1px solid red"}
                    >
                      <Text
                        fontSize="12px"
                        fontWeight={"400"}
                        lineHeight="17px"
                        color={"#757575"}
                      >
                        MRP{" "}
                        <Text as={"span"} textDecoration={"line-through"}>
                          {" "}
                          {d.strikedPrice}
                        </Text>
                      </Text>
                      <Text
                        pl={"10px"}
                        color="#5ac265"
                        fontSize="12px"
                        fontWeight={600}
                        lineHeight="16px"
                      >
                        {d.discount}% off
                      </Text>
                    </Flex>
                    <Box>
                      <Flex
                        position={"absolute"}
                        bottom={1}
                        left={0}
                        right={0}
                        marginLeft="10px"
                        marginRight="10px"
                        height={"40px"}
                        // paddingBottom={"5px"}
                        flexDirection={"row"}
                        justifyContent="space-between"
                        alignItems={"center"}
                        borderRadius={"2px"}
                        fontWeight={"bold"}
                        fontSize="14px"
                      >
                        <Flex justifyContent="flex-start" alignItems={"center"}>
                          <BiRupee fontSize={"16px"} />

                          <Text fontSize={"16px"}> {d.price}</Text>
                        </Flex>
                      </Flex>
                    </Box>
                  </Box>
                </SwiperSlide>
              );
            }
          }
        })}
      </Swiper>
    </Box>
  );
};

export default Productslide;

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./slider2.css";
import { v4 as uuidv4 } from "uuid";
import { Navigation } from "swiper";
import {
  Box,
  Heading,
  Text,
  Image,
  Stack,
  Link,
  Flex,
  Skeleton,
} from "@chakra-ui/react";
import { TopSellers } from "./SliderData";
import { StarIcon } from "@chakra-ui/icons";
import { BiAlignJustify, BiRupee } from "react-icons/bi";
import SliderComp from "./SliderComp";
import { useRef } from "react";

export const ProductSlider2 = ({ data, loading }) => {
  const loadingItems = useRef(new Array(6).fill({ loading: true }));

  return (
    <Box>
      <Swiper
        slidesPerView={6}
        spaceBetween={10}
        slidesPerGroup={1}
        loop={false}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: false,
        }}
        breakpoints={{
          270: {
            slidesPerView: 1,
            spaceBetween: 5,
          },

          465: {
            slidesPerView: 2,
            spaceBetween: 5,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 5,
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 5,
          },
          930: {
            slidesPerView: 4,
            spaceBetween: 5,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1180: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
        }}
        navigation={true}
        modules={[Navigation]}
        style={{
          paddingTop: "20px",
          paddingBottom: "10px",
        }}
      >
        {loading
          ? loadingItems.current?.map((item, i) => (
              <Skeleton
                height="350px"
                width={"230px"}
                key={uuidv4()}
                startColor="blackAlpha.50"
                endColor="blackAlpha.300"
                isLoaded={!loading}
                borderRadius={"md"}
              ></Skeleton>
            ))
          : data &&
            data?.length &&
            data?.map((el, i) => (
              <SwiperSlide
                key={uuidv4()}
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <SliderComp product={el} />
              </SwiperSlide>
            ))}
      </Swiper>
    </Box>
  );
};

export default ProductSlider2;

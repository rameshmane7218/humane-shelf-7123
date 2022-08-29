import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { v4 as uuidv4 } from "uuid";
import { Navigation } from "swiper";
import { Box, Skeleton } from "@chakra-ui/react";

import { useRef } from "react";
import SliderComp from "../Home/SliderComp";

export const ProductSliderCart = ({ data, loading }) => {
  const loadingItems = useRef(new Array(6).fill({ loading: true }));

  return (
    <Box>
      <Swiper
        slidesPerView={2}
        spaceBetween={5}
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

export default ProductSliderCart;

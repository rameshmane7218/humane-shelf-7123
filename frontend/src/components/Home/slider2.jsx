import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./slider2.css";

import { Navigation } from "swiper";
import { Box, Heading, Text, Image, Stack } from "@chakra-ui/react";

export const Slider2 = ({ items }) => {
  // console.log(items);
  return (
    <Box height="200px">
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
          200: {
            slidesPerView: 1,
            spaceBetween: 5,
          },
          380: {
            slidesPerView: 2,
            spaceBetween: 5,
          },
          485: {
            slidesPerView: 3,
            spaceBetween: 5,
          },
          585: {
            slidesPerView: 3,
            spaceBetween: 5,
          },
          640: {
            slidesPerView: 4,
            spaceBetween: 5,
          },
          798: {
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
        // className="mainSwiper"
        style={{
          paddingTop: "20px",
          paddingBottom: "20px",
        }}
      >
        {items?.map((d, i) => {
          {
            if (d.title) {
              return (
                <SwiperSlide
                  key={i}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Box className="swiperProducts" width={"190px"}>
                    <Box
                      rounded={"lg"}
                      p={"1rem"}
                      pos={"relative"}
                      height={"160px"}
                    >
                      <Image
                        rounded={"lg"}
                        height={110}
                        width={212}
                        objectFit={"cover"}
                        src={d.img}
                        className={"swiperImage"}
                      />
                    </Box>
                    <Stack textAlign={"center"} pb={4}>
                      <Heading
                        fontSize={"1rem"}
                        fontFamily={"body"}
                        fontWeight={500}
                      >
                        {d.title}
                      </Heading>
                    </Stack>
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

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./slider2.css";
import { v4 as uuidv4 } from "uuid";
import { Navigation } from "swiper";
import {
    Box,
    Flex,
    Skeleton,
    SkeletonCircle,
    SkeletonText,
    Stack,
} from "@chakra-ui/react";

import SliderComp from "./SliderComp";
import { useState } from "react";

export const ProductSlider2 = ({ data, loading }) => {
    const [loadingItems, setLoadingItems] = useState(new Array(6).fill(""));

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
                    ? loadingItems?.map((item, i) => (
                          <SwiperSlide
                              key={uuidv4()}
                              style={{
                                  display: "flex",
                                  justifyContent: "center",
                              }}
                          >
                              <Stack
                                  height="350px"
                                  width={"230px"}
                                  borderRadius={"md"}
                              >
                                  <Skeleton
                                      height="170px"
                                      width={"230px"}
                                      isLoaded={!loading}
                                  />
                                  <SkeletonCircle
                                      size="10"
                                      isLoaded={!loading}
                                  />
                                  <SkeletonText
                                      mt="4"
                                      noOfLines={4}
                                      spacing="4"
                                      isLoaded={!loading}
                                  />
                              </Stack>
                          </SwiperSlide>
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

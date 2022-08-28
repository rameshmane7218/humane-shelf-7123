import React from "react";
import { Box, Image } from "@chakra-ui/react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { useState } from "react";
const sliderImg = [
  {
    img: "https://onemg.gumlet.io/3a5d9aa3-4b44-4f92-affe-2261cfa288fd_1661248108.jpg?w=911&h=200&format=auto",
    id: 3763,
  },
  {
    img: "https://onemg.gumlet.io/a_ignore,w_911,h_200,c_fit,q_auto,f_auto/edq9awox0cpywojoubhb.png",
    id: 3765,
  },
  {
    img: "https://onemg.gumlet.io/a_ignore,w_911,h_200,c_fit,q_auto,f_auto/a7v2ipno4azmdu6cnjuu.png",
    id: 3766,
  },
  {
    img: "https://onemg.gumlet.io/a_ignore,w_911,h_200,c_fit,q_auto,f_auto/kcdcsb5yrkpxok5bpm8y.png",
    id: 3767,
  },
];
const ImageSlider = () => {
  const [imges, setImages] = useState(sliderImg);

  return (
    <Swiper
      height="200px"
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
    >
      {imges.map((item, index) => (
        <SwiperSlide key={item.id}>
          <Image
            src={item.img}
            boxSize="180px"
            width="100%"
            objectFit="cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSlider;

// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import "./slider2.css";

// import { Navigation } from "swiper";
// import { Box, Heading, Text, Image, Stack } from "@chakra-ui/react";

// export const Slider2 = ({ items }) => {
//   // console.log(items);
//   return (
//     <Box boxShadow="base" height="200px" mb="3%">
//       <Swiper
//         slidesPerView={6}
//         spaceBetween={10}
//         slidesPerGroup={3}
//         loop={true}
//         loopFillGroupWithBlank={true}
//         pagination={{
//           clickable: false,
//         }}
//         breakpoints={{
//           270: {
//             slidesPerView: 2,
//             spaceBetween: 5,
//           },
//           425: {
//             slidesPerView: 3,
//             spaceBetween: 5,
//           },
//           640: {
//             slidesPerView: 4,
//             spaceBetween: 5,
//           },
//           768: {
//             slidesPerView: 5,
//             spaceBetween: 5,
//           },
//           1024: {
//             slidesPerView: 6,
//             spaceBetween: 10,
//           },
//         }}
//         navigation={true}
//         modules={[Navigation]}
//         className="mainSwiper"
//       >
//         {items?.map((d, i) => {
//           {
//             if (d.title) {
//               return (
//                 <SwiperSlide key={i} className="swiperProducts">
                 
//                   <Stack align={"center"} pb={4}>
//                     <Heading
//                       fontSize={"1rem"}
//                       fontFamily={"body"}
//                       fontWeight={500}
//                     >
//                       {d.title}
//                     </Heading>
//                   </Stack>
//                 </SwiperSlide>
//               );
//             }
//           }
//         })}
//       </Swiper>
//     </Box>
//   );
// };

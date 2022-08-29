import {
  Box,
  Container,
  Flex,
  Image,
  Heading,
  Center,
  Text,
  Stack,
  Divider,
  useToast,
  Skeleton,
} from "@chakra-ui/react";

import ImageSlider from "./ImageSlider";
import { Slider2 } from "./slider2";
import { brands, popular, health } from "./data";
import { Productslide } from "./Productslide";
// import { TopSellers, Trendingnow, dealoftheday } from "./SliderData";
import ProductSlider2 from "./ProductSlider2";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getSliderProductAPI } from "../../store/newProduct/products.actions";

const Slider = () => {
  const { loading, TopSellers, Trendingnow, dealoftheday } = useSelector(
    (store) => store.products.getSlider
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if (!TopSellers.length) {
      dispatch(getSliderProductAPI());
    }
  }, [dispatch, getSliderProductAPI]);
  return (
    <Box>
      <Flex h="auto" flexDirection={["column", "column", "row"]}>
        <Box width={["100%", "100%", "65%"]}>
          <ImageSlider />
        </Box>
        <Box>
          <Image
            margin={"auto"}
            width={"100%"}
            src="https://onemg.gumlet.io/a_ignore,w_480,h_200,c_fit,q_auto,f_auto/rohm7mk20fc4mairgjg0.png"
          />
        </Box>
      </Flex>
      <Center>
        <Heading as="h3" size="md" color="grey" mt="30px">
          Tata 1mg: India’s Leading Online Pharmacy & Healthcare Platform
        </Heading>
      </Center>
      <Box mt="30px" mb="50px" boxShadow="md" height="auto">
        <Center>
          <Image src="https://res.cloudinary.com/du8msdgbj/image/upload/v1647251796/ueyxzzku83yuvpqxyrwe.png" />
        </Center>
      </Box>

      <Box mt={"35px"}>
        <Text fontSize={"3xl"} textAlign={"left"} fontWeight={300}>
          Featured brands
        </Text>
        <Divider color={"#ccc"} />
        <Slider2 items={brands} />
      </Box>
      <Box mt={"35px"}>
        <Text fontSize={"3xl"} textAlign={"left"} fontWeight={300}>
          Popular Categories
        </Text>
        <Divider color={"#ccc"} />
        <Slider2 items={popular} />
      </Box>

      <Box mt={"35px"}>
        <Text fontSize={"3xl"} textAlign={"left"} fontWeight={300}>
          Top Sellers From Healthvit
        </Text>
        <Divider color={"#ccc"} />
        <ProductSlider2 data={TopSellers} loading={loading} />
      </Box>
      <Box mt={"35px"}>
        <Text fontSize={"3xl"} textAlign={"left"} fontWeight={300}>
          Trending now
        </Text>
        <Divider color={"#ccc"} />
        <ProductSlider2 data={Trendingnow} loading={loading} />
      </Box>
      <Box mt={"35px"}>
        <Text fontSize={"3xl"} textAlign={"left"} fontWeight={300}>
          Shop by Health Concerns
        </Text>
        <Divider color={"#ccc"} />
        <Slider2 items={health} />
      </Box>

      <Box mt={"35px"}>
        <Text fontSize={"3xl"} textAlign={"left"} fontWeight={300}>
          Deals of the day
        </Text>
        <Divider color={"#ccc"} />
        <ProductSlider2 data={dealoftheday} loading={loading} />
      </Box>
    </Box>
  );
};

export default Slider;

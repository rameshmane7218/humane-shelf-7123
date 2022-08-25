

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
import { brands, popular, health } from "./data"





const Slider = () => {
  return (

    <box>
      <Flex >
        <Box width="65%" color="white" >

          <ImageSlider />


        </Box>
        <Box >
          <Image height="100%" src="https://onemg.gumlet.io/a_ignore,w_480,h_200,c_fit,q_auto,f_auto/rohm7mk20fc4mairgjg0.png" />
        </Box>
      </Flex>
      <Center>
        <Heading as='h3' size='md' color="grey" mt="30px">
          Tata 1mg: India’s Leading Online Pharmacy & Healthcare Platform
        </Heading>
      </Center>
      <Box mt="30px" mb="50px" boxShadow='md' height="auto" >
        <Center>
          <Image src="https://res.cloudinary.com/du8msdgbj/image/upload/v1647251796/ueyxzzku83yuvpqxyrwe.png" />
        </Center>
      </Box>
      <Text fontWeight="bold">Featured brands</Text>
      <Slider2 items={brands} />

      <Slider2 items={popular} />
      <Slider2 items={health} />


    </box>




  );
};

export default Slider;



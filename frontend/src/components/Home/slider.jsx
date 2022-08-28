

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
import { Productslide } from "./Productslide";
import { TopSellers,Trendingnow, dealoftheday} from "./SliderData"





const Slider = () => {
  return (

    <box>
      <Flex  border="1px solid red" h="auto">
        <Box width="65%" border="1px solid black"  >

          <ImageSlider />


        </Box>
        <Box >
          <Image  src="https://onemg.gumlet.io/a_ignore,w_480,h_200,c_fit,q_auto,f_auto/rohm7mk20fc4mairgjg0.png" />
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
    
        <Box>
        <Text fontWeight="bold">Featured brands</Text>
      <Slider2 items={brands} />
        </Box>
        <Box>
        <Text fontWeight="bold">Popular Categories</Text>
      <Slider2 items={popular} />
        </Box>
        <Box>
        <Text fontWeight="bold">Top Sellers From Healthvit</Text>
        <Productslide items={TopSellers}/>
        </Box>
        <Box>
        <Text fontWeight="bold">Trending now</Text>
        <Productslide items={Trendingnow}/>
        </Box>
        <Box>
        <Text fontWeight="bold">Shop by Health Concerns</Text>
        <Slider2 items={health} />
        </Box>
        <Box>
        <Text fontWeight="bold">Deals of the day</Text>
        <Productslide items={dealoftheday}/>
        </Box>
    

     
       
     
    

    </box>




  );
};

export default Slider;



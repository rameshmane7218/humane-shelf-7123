import React from "react";
import style from "./Footer.module.css";
import { v4 as uuidv4 } from "uuid";
import {
  Box,
  Center,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  VisuallyHidden,
  chakra,
  useColorModeValue,
  Flex,
  Button,
  FormControl,
  Input,
  Heading,
  Image,
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  AccordionItem,
} from "@chakra-ui/react";
import { useState } from "react";
import Upperfooter from "./Upperfooter";
import { CheckIcon } from "@chakra-ui/icons";
import { FaMedium, FaTwitterSquare, FaYoutubeSquare } from "react-icons/fa";
import { GrFacebook, GrLinkedin } from "react-icons/gr";
// import ReactStoreBadges from "react-store-badges";

import appleStore from "../assets/footer/appleStore.svg";
import playStore from "../assets/footer/playStore.svg";
const known = [
  "About Us",
  "Contact Us",
  " Press Coverage",
  "Careers",
  "Business Partnership",
  "Become a Health Partner",
  "Corporate Governance",
];
const policy = [
  "Privacy Policy",
  "Terms and Conditions",
  "Editorial Policy",
  "Return Policy",
  "IP Policy",
  "Grievance Redressal Policy",
];
const services = [
  "Order Medicines",
  "Book Lab Tests",
  "Consult a Doctor",
  "Ayurveda Articles",
  "Hindi Articles",
  "Care Plan",
];
const Data = [
  {
    img: "https://res.cloudinary.com/du8msdgbj/image/upload/v1571132631/secure-rebrand_x6f8yq.svg",
    desc: "All products displayed on Tata 1mg are procured from verified and licensed pharmacies. All labs listed on the platform are accredited",
    title: "Reliable",
  },
  {
    img: "https://res.cloudinary.com/du8msdgbj/image/upload/v1571132500/reliable-rebrand_rcpof3.svg",
    desc: "Tata 1mg uses Secure Sockets Layer (SSL) 128-bit encryption and is Payment Card Industry Data Security Standard (PCI DSS) compliant",
    title: "Secure",
  },
  {
    img: "https://res.cloudinary.com/du8msdgbj/image/upload/v1571131870/affordable-rebrand_ivgidq.svg",
    desc: "Find affordable medicine substitutes, save up to 50% on health products, up to 80% off on lab tests and free doctor consultations.",
    title: "Affordable",
  },
];

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

const Footer = () => {
  return (
    <Box>
      <Box border={"2px solid #e6e9f0"}>
        <Container maxW="container.xl" pt={"10px"}>
          <Stack>
            <Flex flexDirection={"column"} className={style.footerStack}>
              <Center>
                <Text
                  as="h6"
                  fontSize={{ base: "1rem", md: "1.5rem" }}
                  fontFamily="monospace"
                  fontWeight={{ base: "bold", sm: "bold", md: "light" }}
                >
                  INDIA’S LARGEST HEALTHCARE PLATFORM
                </Text>
              </Center>

              <Flex
                justifyContent={"space-around"}
                textAlign="center"
                p={"2rem 0"}
              >
                <Box fontWeight="bold" fontSize="1.7rem">
                  160m+
                  <br />
                  <Text fontWeight="400" fontSize="1.2rem">
                    Visitors
                  </Text>
                </Box>
                <Box fontWeight="bold" fontSize="1.7rem">
                  27m+
                  <br />
                  <Text fontWeight="400" fontSize="1.2rem">
                    Orders Delivered
                  </Text>
                </Box>
                <Box fontWeight="bold" fontSize="1.7rem">
                  1800+
                  <br />
                  <Text fontWeight="400" fontSize="1.2rem">
                    Cities
                  </Text>
                </Box>
              </Flex>
            </Flex>
          </Stack>
          <Box className={style.footerLine}></Box>
          <Center>
            <Box fontSize={"1.3rem"}>Get the link to download App</Box>
            <Box>
              <SendLink />
            </Box>
          </Center>
        </Container>
      </Box>
      <Box
        background={"#fffcf8"}
        color={useColorModeValue("gray.700", "gray.200")}
      >
        <Container
          as={Stack}
          maxW={"container.xl"}
          py={10}
          background={"#fffcf8"}
        >
          <SimpleGrid
            columns={{ base: 1, sm: 2, md: 5 }}
            // textAlign="left"
            spacing={55}
            m="auto"
          >
            <Stack align={"center"}>
              <ListHeader>Known Us</ListHeader>
              {known.map((el) => (
                <Link
                  key={uuidv4()}
                  lineHeight="1.81"
                  fontSize="11px"
                  color="#666"
                  href={"#"}
                >
                  {el}
                </Link>
              ))}
            </Stack>

            <Stack align={"center"}>
              <ListHeader>Our Policies</ListHeader>
              {policy.map((el) => (
                <Link
                  key={uuidv4()}
                  lineHeight="1.81"
                  fontSize="11px"
                  color="#666"
                  href={"#"}
                >
                  {el}
                </Link>
              ))}
            </Stack>

            <Stack align={"center"}>
              <ListHeader>Our Services</ListHeader>
              {services.map((el) => (
                <Link
                  key={uuidv4()}
                  lineHeight="1.81"
                  fontSize="11px"
                  color="#666"
                  href={"#"}
                >
                  {el}
                </Link>
              ))}
            </Stack>
            <Stack align={"center"}>
              <ListHeader>Connect</ListHeader>
              <Link href={"#"} lineHeight="1.81" fontSize="12px" color="#666">
                Social Links
              </Link>
              <Stack direction={"row"} spacing={4}>
                <GrFacebook fontSize="1.5rem" borderradius={"5px"} />

                <FaTwitterSquare fontSize="1.6rem" borderradius={"5px"} />

                <FaYoutubeSquare fontSize="1.7rem" borderradius={"5px"} />

                <GrLinkedin fontSize="1.5rem" borderradius={"5px"} />

                <FaMedium fontSize="1.6rem" borderradius={"5px"} />
              </Stack>
            </Stack>

            <Stack align={"center"}>
              <ListHeader>Download App</ListHeader>
              <Box
                key={uuidv4()}
                as="a"
                target="_blank"
                href={
                  "https://play.google.com/store/apps/details?id=com.aranoah.healthkart.plus"
                }
              >
                <Image src={playStore} width="144px" />
              </Box>
              <Box
                key={uuidv4()}
                as="a"
                target="_blank"
                href={"https://itunes.apple.com/in/app/1mg/id554578419?mt=8"}
              >
                <Image src={appleStore} width="144px" />
              </Box>
            </Stack>
          </SimpleGrid>
        </Container>
        <Container
          as={Stack}
          maxW={"container.xl"}
          py={8}
          borderY="1px solid #D3D3D3"
          background={"#fffcf8"}
        >
          <SimpleGrid
            columns={{ base: 1, sm: 2, md: 3 }}
            // textAlign="left"
            maxW={"6xl"}
            spacing={85}
            className={style.footerStampWrapper}
          >
            {Data.map((el) => (
              <Box className={style.footerStamp} key={uuidv4()}>
                <Image src={el.img} />
                <Box>
                  <Text fontSize={"26px"} fontWeight="bold">
                    {el.title}
                  </Text>
                  <Text lineHeight="1.81" fontSize="10px" color="#767676">
                    {el.desc}
                  </Text>
                </Box>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
        <Stack align={"center"} pt="10px" background={"#fffcf8"}>
          <Center flexDirection={"column"} gap={5}>
            <Image
              width="15%"
              src="	https://res.cloudinary.com/du8msdgbj/image/upload/v1580717209/URS_ebgmxc.png"
            />
            <Text fontWeight="bold">
              India's only LegitScript and ISO/ IEC 27001 certified online
              healthcare platform
            </Text>
          </Center>
        </Stack>
        <Accordion
          margin={"auto"}
          maxW={"container.xl"}
          defaultIndex={[0]}
          allowMultiple
          pt="20px"
          background={"#fffcf8"}
        >
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontWeight="bold">
                  Know more about Tata 1mg
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Text as="h6" fontWeight="bold">
                Access medical and health information
              </Text>
              Tata 1mg provides you with medical information which is curated,
              written and verified by experts, accurate and trustworthy. Our
              experts create high-quality content about medicines, diseases, lab
              investigations, Over-The-Counter (OTC) health products, Ayurvedic
              herbs/ingredients, and alternative remedies.
            </AccordionPanel>
            <AccordionPanel pb={4}>
              <Text as="h6" fontWeight="bold">
                Order medicines online
              </Text>
              Get free medicine home delivery in over 1800 cities across India.
              You can also order Ayurvedic, Homeopathic and other
              Over-The-Counter (OTC) health products. Your safety is our top
              priority. All products displayed on Tata 1mg are procured from
              verified and licensed pharmacies.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        <Box maxW={"container.xl"} margin={"auto"}>
          <Text
            as="h6"
            pt={"20px"}
            color="#536971"
            background={"#fffcf8"}
            textAlign="center"
          >
            © 2022 Tata 1mg. All rights reserved. In compliance with Drugs and
            Cosmetics Act, 1940 and Drugs and Cosmetics Rules, 1945, we don't
            process requests for Schedule X and other habit forming drugs.
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export function SendLink() {
  const [number, setNumber] = useState("");
  const [state, setState] = useState("");

  return (
    <Flex align={"center"} justify={"center"}>
      <Container
        maxW={"lg"}
        // boxShadow={"xl"}
        rounded={"lg"}
        p={6}
        direction={"column"}
      >
        <Stack
          direction={{ base: "column", md: "row" }}
          as={"form"}
          spacing={"12px"}
        >
          <FormControl>
            <Input
              variant={"solid"}
              borderWidth={1}
              color={"gray.800"}
              _placeholder={{
                color: "gray.400",
              }}
              borderColor={useColorModeValue("gray.300", "gray.700")}
              id={"phone"}
              type={"phone"}
              required
              placeholder={"Enter your Phone Number"}
              aria-label={"Your Phone Number"}
            />
          </FormControl>
          <FormControl w={{ base: "100%", md: "40%" }}>
            <Button color={"#fff"} bg="#ff6f61" fontSize={".9rem"} w="100%">
              send link
            </Button>
          </FormControl>
        </Stack>
      </Container>
    </Flex>
  );
}

export default Footer;

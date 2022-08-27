import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Center,
  Heading,
  MenuButton,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Input,
  Image,
  InputGroup,
  InputLeftElement,
  PopoverBody,
  InputRightElement,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import { v4 as uuidv4 } from "uuid";
import { BsPerson, BsCart } from "react-icons/bs";
import { SiGooglemaps } from "react-icons/si";
import { FiSearch } from "react-icons/fi";
import { BiCurrentLocation } from "react-icons/bi";
import style from "./navbar.module.css";
import { IconCart } from "./icons";

const navdata = [
  "Health Resource Center",
  "Vitamins & Nutrition",
  "Diabetes",
  "Healthcare Devices",
  "Personal Care",
];

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box
      zIndex={"sticky"}
      bg={"white"}
      w={"100%"}
      position={"fixed"}
      top={0}
      left={0}
      right={0}
    >
      <Box
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
      >
        <Flex
          maxW="container.xl"
          m={"auto"}
          bg={useColorModeValue("white", "gray.800")}
          color={useColorModeValue("gray.600", "white")}
          minH={"60px"}
          py={{ base: 2 }}
          px={{ base: 4 }}
          align={"center"}
        >
          <Flex
            // flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: "block", md: "none" }}
          >
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon w={5} h={5} />
                )
              }
              variant={"ghost"}
              aria-label={"Toggle Navigation"}
            />
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
            <Box>
              <img
                src="https://www.1mg.com/images/tata_1mg_logo.svg"
                alt="logo"
              />
            </Box>

            <Flex display={{ base: "none", md: "flex" }} ml={10}>
              <DesktopNav />
            </Flex>
          </Flex>
          <Box display={{ base: "block", md: "none" }}>
            <IconCart />
          </Box>

          <Stack
            display={{ base: "none", md: "flex" }}
            flex={{ base: 1, md: 0 }}
            justify={"flex-end"}
            direction={"row"}
            spacing={6}
          >
            <Popover trigger={"hover"}>
              <PopoverTrigger>
                <Box>
                  <BsPerson
                    fontSize="1.5rem"
                    borderradius={"5px"}
                    color="black"
                  />
                </Box>
              </PopoverTrigger>
              <PopoverContent width="100%">
                <PopoverBody>Hii, there</PopoverBody>
                <hr />
                <PopoverBody>View Profile</PopoverBody>
                <PopoverBody>Logout</PopoverBody>
              </PopoverContent>
            </Popover>

            <Text fontSize="sm">Offers</Text>
            <BsCart fontSize="1.5rem" borderradius={"5px"} color="black" />
            <Text fontSize="sm">Need.help?</Text>
          </Stack>
        </Flex>

        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
      {/* ************************************ */}

      <Stack
        display={{ base: "none", xl: "flex" }}
        flexDirection="row"
        justifyContent="space-between"
        borderBottom="1px solid rgb(238, 235, 235)"
        p={".5rem 1rem 0 2rem"}
      >
        <Flex className={style.bottomLeftNav} gap={2} flex={6}>
          <InputGroup w={"70%"} flex={2}>
            <InputLeftElement
              pointerEvents="none"
              children={<SiGooglemaps color="gray" />}
            />
            <Input
              type="text"
              bg={"#f1f3f9"}
              placeholder="Gaya"
              _placeholder={{ opacity: 1, color: "black" }}
              focusBorderColor="none"
            />
            <InputRightElement
              pointerEvents="none"
              children={<BiCurrentLocation color="gray" />}
            />
          </InputGroup>
          <InputGroup flex={5}>
            <Input
              type="text"
              bg={"#f1f3f9"}
              _placeholder={{ opacity: 1, color: "grey", fontSize: "sm" }}
              focusBorderColor="none"
              placeholder="Search for Medicines and Health Products"
            />
            <InputRightElement
              pointerEvents="none"
              children={<FiSearch color="gray.800" />}
            />
          </InputGroup>

          <Flex minWidth="max-content" alignItems="center" gap="2">
            <Box p="2">
              <Text fontSize="xs" fontWeight="bold" color="grey">
                QUICK BUY! Get 25% off on medicines*
              </Text>
            </Box>
            {/* <Spacer /> */}

            <Button
              size="md"
              height="40px"
              width="150px"
              bg="#ff6f61"
              color="white"
              mb="2%"
            >
              Quick Order
            </Button>
          </Flex>
        </Flex>
      </Stack>
      {/* ************************************************ */}

      {/* <Stack direction={['column', 'row']} spacing='24px'>
        {navdata.map((el)=>(
         <Box as={Button}  rightIcon={<ChevronDownIcon />}>
        {el}
       </Box>
        ))}
    
</Stack> */}
    </Box>
  );
}

const DesktopNav = () => {
  return (
    <Stack direction={"row"} spacing={3} mt="1%">
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? "#"}
                fontSize={{ md: "md" }}
                fontWeight={700}
                color="black"
                _hover={{
                  textDecoration: "none",
                  color: "#ff6f61",
                }}
              >
                {navItem}
              </Link>
            </PopoverTrigger>
          </Popover>
        </Box>
      ))}
      // Button from facebook.com
      <Box
        as="button"
        height="24px"
        lineHeight="1.2"
        transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
        border="1px"
        px="8px"
        borderRadius="2px"
        fontSize="12px"
        fontWeight="bold"
        bg="#ff6f61"
        borderColor="none"
        color="white"
      >
        save more
      </Box>
    </Stack>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}

      display={{ md: 'none' }}>
  
        <Box display="flex" gap={2}>
        <Box>
          
          <Image src="https://onemg.gumlet.io/ujhc0ajudwhuebwt5zsr.svg"/>
          
          </Box>
          <Box pt="4px">
           
            <Heading as='h6' size='sm'> Hi There!</Heading>
            <Text fontSize='xs'>Login/Signup</Text>
           
          </Box>
            
        </Box>
      

    >

      {NAV_ITEMS.map((el) => (
        <MobileNavItem el={el} key={uuidv4()} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ el, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {el}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>
    </Stack>
  );
};

const NAV_ITEMS = [
  "Medicines",
  "Lab Tests",
  "Consult Doctors",
  "Covid-19",
  "Ayurveda",
  "Careplan",
];

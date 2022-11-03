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
    ArrowForwardIcon,
} from "@chakra-ui/icons";
import { v4 as uuidv4 } from "uuid";
import { BsPerson, BsCart } from "react-icons/bs";
import { SiGooglemaps } from "react-icons/si";
import { FiSearch } from "react-icons/fi";
import { BiCurrentLocation } from "react-icons/bi";
import style from "./navbar.module.css";
import { IconCart } from "./icons";
import { useLocation, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { userLogoutAPI } from "../store/authentication/auth.actions";
import SearchBox from "./Navbar/SearchBox";
import MobileSearchBox from "./Navbar/MobileSearchBox";

const navdata = [
    "Health Resource Center",
    "Vitamins & Nutrition",
    "Diabetes",
    "Healthcare Devices",
    "Personal Care",
];

export default function Navbar() {
    const dispatch = useDispatch();
    const { require, isAuth } = useSelector((store) => store.auth);

    const { isOpen, onToggle } = useDisclosure();
    const navigate = useNavigate();
    const { data: cartData, getCartItems } = useSelector((state) => state.cart);

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
                    <Flex
                        flex={{ base: 1 }}
                        justify={{ base: "center", md: "start" }}
                        alignItems={"center"}
                    >
                        <Box
                            onClick={() => {
                                if (isOpen) {
                                    onToggle();
                                }
                                navigate("/");
                            }}
                            cursor={"pointer"}
                            title={"1mg, India's Largest Healthcare Platform"}
                        >
                            <img
                                src="https://www.1mg.com/images/tata_1mg_logo.svg"
                                alt="logo"
                            />
                        </Box>

                        <Flex display={{ base: "none", md: "flex" }} ml={10}>
                            <DesktopNav />
                        </Flex>
                    </Flex>
                    <Box display={{ base: "block", md: "none" }} mr={"20px"}>
                        <MobileSearchBox />
                    </Box>
                    <Box
                        position={"relative"}
                        display={{ base: "block", md: "none" }}
                        onClick={() => {
                            if (isOpen) {
                                onToggle();
                            }
                            navigate("/cart");
                        }}
                    >
                        <Box mr={"10px"}>
                            <IconCart />
                        </Box>
                        <Flex
                            position={"absolute"}
                            top={-1}
                            right={0}
                            border={"1px solid red"}
                            height={"17px"}
                            width={"17px"}
                            rounded={"md"}
                            background={"#ff6f61"}
                            color={"white"}
                            fontWeight={"bold"}
                            fontSize={"12px"}
                            justifyContent={"center"}
                            alignItems={"center"}
                        >
                            <Text>{cartData.length || "0"}</Text>
                        </Flex>
                    </Box>

                    <Stack
                        display={{ base: "none", md: "flex" }}
                        flex={{ base: 1, md: 0 }}
                        justify={"flex-end"}
                        direction={"row"}
                        spacing={6}
                    >
                        {isAuth ? (
                            <Popover trigger={"hover"}>
                                <PopoverTrigger>
                                    <Flex alignItems={"center"}>
                                        <BsPerson
                                            fontSize="1.5rem"
                                            borderradius={"5px"}
                                            color="black"
                                        />
                                    </Flex>
                                </PopoverTrigger>
                                <PopoverContent width="100%">
                                    <PopoverBody cursor={"pointer"}>
                                        Hii, there
                                    </PopoverBody>
                                    <hr />
                                    <PopoverBody
                                        cursor={"pointer"}
                                        onClick={() => {
                                            navigate("/profile");
                                        }}
                                    >
                                        View Profile
                                    </PopoverBody>
                                    <PopoverBody
                                        cursor={"pointer"}
                                        onClick={() => {
                                            dispatch(
                                                userLogoutAPI(
                                                    JSON.parse(
                                                        localStorage.getItem(
                                                            "currentLogin"
                                                        )
                                                    )._id
                                                )
                                            );
                                        }}
                                    >
                                        Logout
                                    </PopoverBody>
                                </PopoverContent>
                            </Popover>
                        ) : (
                            <Flex>
                                <Button
                                    fontSize="sm"
                                    fontWeight={"normal"}
                                    variant="link"
                                    color={"gray.600"}
                                    onClick={() => {
                                        require.setMethod(true);
                                        require.onOpenAuth();
                                    }}
                                >
                                    Login
                                </Button>
                                {"|"}
                                <Button
                                    fontSize="sm"
                                    fontWeight={"normal"}
                                    variant="link"
                                    color={"gray.600"}
                                    onClick={() => {
                                        require.setMethod(false);
                                        require.onOpenAuth();
                                    }}
                                >
                                    Signup
                                </Button>
                            </Flex>
                        )}

                        <Flex
                            cursor={"pointer"}
                            alignItems={"center"}
                            fontSize="sm"
                        >
                            Offers
                        </Flex>
                        <Box
                            position={"relative"}
                            onClick={() => navigate("/cart")}
                        >
                            <Box mr={"10px"}>
                                <IconCart />
                            </Box>
                            <Flex
                                position={"absolute"}
                                top={-1}
                                right={0}
                                border={"1px solid red"}
                                height={"17px"}
                                width={"17px"}
                                rounded={"md"}
                                background={"#ff6f61"}
                                color={"white"}
                                fontWeight={"bold"}
                                fontSize={"12px"}
                                justifyContent={"center"}
                                alignItems={"center"}
                            >
                                <Text>{cartData.length || "0"}</Text>
                            </Flex>
                        </Box>
                        {/* <BsCart fontSize="1.5rem" borderradius={"5px"} color="black" /> */}
                        <Flex
                            cursor={"pointer"}
                            alignItems={"center"}
                            fontSize="sm"
                        >
                            Need.help?
                        </Flex>
                    </Stack>
                </Flex>

                <Collapse in={isOpen} animateOpacity>
                    <MobileNav isOpen={isOpen} onToggle={onToggle} />
                </Collapse>
            </Box>
            {/* ************************************ */}
            <Box
                borderBottom={1}
                borderStyle={"solid"}
                borderColor={useColorModeValue("gray.200", "gray.900")}
            >
                <Stack
                    maxW="container.xl"
                    margin={"auto"}
                    display={{ base: "none", xl: "flex" }}
                    flexDirection="row"
                    justifyContent="space-between"
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

                        {/* <InputGroup flex={5}>
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
            </InputGroup> */}
                        <Box flex={5}>
                            <SearchBox />
                        </Box>

                        <Flex
                            minWidth="max-content"
                            alignItems="center"
                            gap="2"
                        >
                            <Box p="2">
                                <Text
                                    fontSize="xs"
                                    fontWeight="bold"
                                    color="grey"
                                >
                                    QUICK BUY! Get 25% off on medicines*
                                </Text>
                            </Box>
                            {/* <Spacer /> */}

                            <Button
                                size="md"
                                height="40px"
                                width="150px"
                                mb="2%"
                                background={"#ff6f61"}
                                color={"white"}
                                _hover={{ backgroundColor: "#ff6f61" }}
                                _active={{ backgroundColor: "#ff6f61" }}
                            >
                                Quick Order
                            </Button>
                        </Flex>
                    </Flex>
                </Stack>
            </Box>
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
    const { pathname } = useLocation();
    return (
        <Stack direction={"row"} spacing={3}>
            {NAV_ITEMS.map((navItem, i) => (
                <Box key={navItem.name}>
                    <Popover trigger={"hover"} placement={"bottom-start"}>
                        <PopoverTrigger>
                            {navItem.href != "#" && i == 0 ? (
                                <Link
                                    to={
                                        navItem.href != "#" && i == 0
                                            ? navItem.href
                                            : ""
                                    }
                                >
                                    <Box
                                        p={2}
                                        fontSize={{ md: "md" }}
                                        fontWeight={700}
                                        color={
                                            pathname == "/products" &&
                                            navItem?.href == "/products"
                                                ? "#ff6f61"
                                                : "black"
                                        }
                                        _hover={{
                                            textDecoration: "none",
                                            color: "#ff6f61",
                                        }}
                                    >
                                        {navItem.name}
                                    </Box>
                                </Link>
                            ) : (
                                <Box
                                    p={2}
                                    fontSize={{ md: "md" }}
                                    fontWeight={700}
                                    color="black"
                                    cursor={"pointer"}
                                    _hover={{
                                        textDecoration: "none",
                                        color: "#ff6f61",
                                    }}
                                >
                                    {navItem.name}
                                </Box>
                            )}
                        </PopoverTrigger>
                    </Popover>
                </Box>
            ))}
            // Button from facebook.com
            <Flex alignItems={"center"}>
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
            </Flex>
        </Stack>
    );
};

const MobileNav = ({ isOpen, onToggle }) => {
    const { require, isAuth } = useSelector((store) => store.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return (
        <Stack
            bg={useColorModeValue("white", "gray.800")}
            p={4}
            display={{ md: "none" }}
        >
            <Box
                display="flex"
                gap={2}
                onClick={() => {
                    onToggle();
                    if (!isAuth) {
                        require.setMethod(true);
                        require.onOpenAuth();
                    } else {
                        navigate("/profile");
                    }
                }}
            >
                <Box>
                    <Image src="https://onemg.gumlet.io/ujhc0ajudwhuebwt5zsr.svg" />
                </Box>
                <Box pt="4px">
                    <Heading as="h6" size="sm">
                        {" "}
                        Hi There!
                    </Heading>
                    <Text fontSize="xs">
                        {isAuth ? "View Profile" : "Login/Signup"}
                    </Text>
                </Box>
            </Box>

            {NAV_ITEMS.map((el, i) => (
                <MobileNavItem
                    el={el}
                    i={i}
                    key={uuidv4()}
                    isOpen={(isOpen, onToggle)}
                    onToggle={(isOpen, onToggle)}
                />
            ))}
            {isAuth && (
                <Flex fontWeight={600} color={"gray.600"}>
                    <Button
                        rightIcon={<ArrowForwardIcon />}
                        colorScheme="teal"
                        variant="outline"
                        onClick={() => {
                            dispatch(
                                userLogoutAPI(
                                    JSON.parse(
                                        localStorage.getItem("currentLogin")
                                    )._id
                                )
                            );
                            onToggle();
                        }}
                    >
                        Logout
                    </Button>
                </Flex>
            )}
        </Stack>
    );
};

const MobileNavItem = ({ el, i, isOpen, onToggle }) => {
    const { isOpen: mobIsOpen, onToggle: mobOnToggle } = useDisclosure();
    const navigate = useNavigate();
    return (
        <Stack spacing={4} onClick={mobOnToggle}>
            {el.href != "#" && i == 0 ? (
                <Flex
                    py={2}
                    onClick={() => {
                        navigate(el.href);
                        onToggle();
                    }}
                    justify={"space-between"}
                    align={"center"}
                    _hover={{
                        textDecoration: "none",
                    }}
                >
                    <Text fontWeight={600} color={"gray.600"}>
                        {el.name}
                    </Text>

                    <Icon
                        as={ChevronDownIcon}
                        transition={"all .25s ease-in-out"}
                        transform={mobIsOpen ? "rotate(180deg)" : ""}
                        w={6}
                        h={6}
                    />
                </Flex>
            ) : (
                <Flex
                    py={2}
                    // as={Link}
                    // href={href ?? "#"}
                    justify={"space-between"}
                    align={"center"}
                    _hover={{
                        textDecoration: "none",
                    }}
                >
                    <Text fontWeight={600} color={"gray.600"}>
                        {el.name}
                    </Text>

                    <Icon
                        as={ChevronDownIcon}
                        transition={"all .25s ease-in-out"}
                        transform={mobIsOpen ? "rotate(180deg)" : ""}
                        w={6}
                        h={6}
                    />
                </Flex>
            )}
        </Stack>
    );
};

const NAV_ITEMS = [
    {
        name: "Medicines",
        href: "/products",
    },
    {
        name: "Lab Tests",
        href: "#",
    },
    {
        name: "Consult Doctors",
        href: "#",
    },
    {
        name: "Covid-19",
        href: "#",
    },
    {
        name: "Ayurveda",
        href: "#",
    },
    {
        name: "Careplan",
        href: "#",
    },
];

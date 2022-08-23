import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import Login from "../Navbar/Login";
import Signup from "../Navbar/Signup";

const Auth = () => {
  const {
    isOpen: isOpenLogin,
    onOpen: onOpenLogin,
    onClose: onCloseLogin,
  } = useDisclosure();
  const {
    isOpen: isOpenSignup,
    onOpen: onOpenSignup,
    onClose: onCloseSignup,
  } = useDisclosure();
  return (
    <div>
      Auth
      <Button onClick={onOpenLogin}>Open Login</Button>
      <Button onClick={onOpenSignup}>Open Signup</Button>
      <Login isOpenLogin={isOpenLogin} onCloseLogin={onCloseLogin} />
      <Signup isOpenSignup={isOpenSignup} onCloseSignup={onCloseSignup} />
    </div>
  );
};

export default Auth;

import React from "react";
import {
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import AuthSlider from "./AuthSlider";
const Login = ({ isOpenLogin, onCloseLogin }) => {
  return (
    <Modal isOpen={isOpenLogin} onClose={onCloseLogin}>
      <ModalOverlay />
      <ModalContent maxW={"900px"}>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton onClick={onCloseLogin} />
        <ModalBody>
          {/* <Lorem count={2} /> */}
          <Flex>
            <AuthSlider />
            <Text>Login</Text>
            
          </Flex>
          {/* fsadjlfk;;;ffffffffffffffffffffffffffffffffjklfdjsakoljfsdoa;ljfkldsajfksldajfkdslajfklsadjfklsadjkflsdaj
          fsadjlfk;;;ffffffffffffffffffffffffffffffffjklfdjsakoljfsdoa;ljfkldsajfksldajfkdslajfklsadjfklsadjkflsdaj
          fsadjlfk;;;ffffffffffffffffffffffffffffffffjklfdjsakoljfsdoa;ljfkldsajfksldajfkdslajfklsadjfklsadjkflsdaj
          fsadjlfk;;;ffffffffffffffffffffffffffffffffjklfdjsakoljfsdoa;ljfkldsajfksldajfkdslajfklsadjfklsadjkflsdaj
          fsadjlfk;;;ffffffffffffffffffffffffffffffffjklfdjsakoljfsdoa;ljfkldsajfksldajfkdslajfklsadjfklsadjkflsdaj
          fsadjlfk;;;ffffffffffffffffffffffffffffffffjklfdjsakoljfsdoa;ljfkldsajfksldajfkdslajfklsadjfklsadjkflsdaj
          fsadjlfk;;;ffffffffffffffffffffffffffffffffjklfdjsakoljfsdoa;ljfkldsajfksldajfkdslajfklsadjfklsadjkflsdaj
          fsadjlfk;;;ffffffffffffffffffffffffffffffffjklfdjsakoljfsdoa;ljfkldsajfksldajfkdslajfklsadjfklsadjkflsdaj
          fsadjlfk;;;ffffffffffffffffffffffffffffffffjklfdjsakoljfsdoa;ljfkldsajfksldajfkdslajfklsadjfklsadjkflsdaj
          fsadjlfk;;;ffffffffffffffffffffffffffffffffjklfdjsakoljfsdoa;ljfkldsajfksldajfkdslajfklsadjfklsadjkflsdaj */}
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onCloseLogin}>
            Close
          </Button>
          <Button variant="ghost">Secondary Action</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default Login;

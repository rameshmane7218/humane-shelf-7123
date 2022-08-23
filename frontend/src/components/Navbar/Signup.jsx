import React from "react";
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
} from "@chakra-ui/react";
const Signup = ({ isOpenSignup, onCloseSignup }) => {
  return (
    <Modal isOpen={isOpenSignup} onClose={onCloseSignup}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton onClick={onCloseSignup} />
        <ModalBody>
          {/* <Lorem count={2} /> */}
          <Text>SignUp</Text>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onCloseSignup}>
            Close
          </Button>
          <Button variant="ghost">Secondary Action</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default Signup;

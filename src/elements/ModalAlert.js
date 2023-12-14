import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text
} from '@chakra-ui/react'

export function ModalComponent({ isOpen, onClose }) {
  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        closeOnOverlayClick={false}
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Please re-log</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Text>You have been away for too long, type your password.</Text>
            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input ref={initialRef} placeholder='Password' />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Manager's name</FormLabel>
              <Input placeholder='We will notify your manager' />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3}>
              Submit
            </Button>
            <Button onClick={onClose}>Cancel&nbsp;<i style={{fontSize: "0.8rem", color: "#666", fontStyle: "normal"}}>(we will notify HR)</i></Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
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
  VStack,
  useColorModeValue,
  Input,
  Textarea,
  Center
} from "@chakra-ui/react";
export const SendMessage = ({ isOpen, onClose }) => {
  const bgColor = useColorModeValue("black.200", "white");
  const buttonColor = useColorModeValue("white", "black.200");
  const border = useColorModeValue("white", "#242734");
  const textColor = useColorModeValue("white", "#747474");

  return (
    <Modal isOpen={isOpen} onClose={onClose} >
      <ModalOverlay />
      <ModalContent m='auto' minW='705px' borderRadius={'35px'} p='56px 0px' bgColor={bgColor}>
        {/* <ModalHeader>Modal Title</ModalHeader> */}
        <ModalCloseButton color={buttonColor} borderRadius='50%' right='35px' top='35px' border={`2px solid ${border}`} />
        <ModalBody w='100%' as={Center} color={textColor} flexDir='column'>
            <VStack w='100%' spacing='20px'>
                  <Input w='272px' placeholder="Name" h='55px' type="text" />
                  <Input w='272px' h='55px' type="email" placeholder="Email" />
                 <Textarea borderColor={'#88E000'} placeholder='Type your message here' border='1px solid' w='272px'/>
            </VStack>
            <Button mt='44px' borderRadius={'15px'} w='200px' h='32px'>Send a message</Button>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

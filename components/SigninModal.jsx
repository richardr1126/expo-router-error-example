import { useState } from 'react';
import {
  Modal,
  ModalBackdrop,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  ButtonGroup,
  ButtonText,
  Text,
  Center,
  Icon,
  CloseIcon,
} from '@gluestack-ui/themed';
import { useRouter } from 'expo-router';

export default function SigninModal({ showActionSheet, handleClose }) {
  const router = useRouter();

  function signinPressed() {
    handleClose();
    router.push('/signin');
  }

  function registerPressed() {
    handleClose();
    router.push('/register');
  }

  return (
    <Modal isOpen={showActionSheet} onClose={handleClose} zIndex={999}>
      <ModalBackdrop />
      <ModalContent>
        <ModalHeader>
        </ModalHeader>
        <ModalBody>
          <Center>
            <ButtonGroup space='lg'>
              <Button onPress={signinPressed}>
                <ButtonText>Sign In</ButtonText>
              </Button>
              <Button variant="outline" onPress={registerPressed}>
                <ButtonText>Register</ButtonText>
              </Button>
            </ButtonGroup>
            <Button mt={'$3'} variant='link' onPress={handleClose}>
              <ButtonText>Skip for now</ButtonText>
            </Button>
          </Center>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

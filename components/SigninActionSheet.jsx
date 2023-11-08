import { useState } from 'react';
import {
  Actionsheet,
  ActionsheetBackdrop,
  ActionsheetContent,
  ActionsheetDragIndicator,
  ActionsheetDragIndicatorWrapper,
  Button,
  ButtonGroup,
  ButtonText,
  Text,
  View,
} from '@gluestack-ui/themed';
import { useRouter } from 'expo-router';

export default function SigninActionSheet({ showActionSheet, handleClose }) {
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
    <Actionsheet isOpen={showActionSheet} onClose={handleClose} zIndex={999}>
      <ActionsheetBackdrop />
      <ActionsheetContent zIndex={999}>
        <ActionsheetDragIndicatorWrapper>
          <ActionsheetDragIndicator />
        </ActionsheetDragIndicatorWrapper>
        <View p={'$6'} pt={'$3'} alignItems='center'>
          <Text fontWeight='$bold'>Please sign in for the full experience</Text>
          <ButtonGroup space='lg' mt={'$5'}>
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
        </View>
      </ActionsheetContent>
    </Actionsheet>
  )
}
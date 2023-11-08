import { Keyboard, TouchableWithoutFeedback, Platform, Image, useColorScheme } from 'react-native';
import {
  View,
  Input,
  InputField,
  LinkText,
  VStack,
  Button,
  ButtonText,
  Link,
  Divider,
  Text,
  InputSlot,
  InputIcon,
  EyeIcon,
  EyeOffIcon
} from "@gluestack-ui/themed";
import { useRouter } from 'expo-router';
import { useState } from 'react';


export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router = useRouter();
  const colorMode = useColorScheme();

  function toggleShowPassword() {
    setShowPassword(!showPassword);
  }

  function toggleShowConfirmPassword() {
    setShowConfirmPassword(!showConfirmPassword);
  }

  function goToSignIn() {
    router.replace('/signin');
  }

  function createAccount() {
    // Here you would handle the account creation logic
  }

  function skipRegistration() {
    router.push('/(tabs)/one'); // Navigate to the main content or dashboard after skipping registration
  }

  const sharedContent = (
    <View padding={'$5'} sx={{
      "@base": {
        paddingTop: 0,
      },
      "@xs": {
        paddingTop: '$16',
      },
    }}>
      <Image
        source={null}
        alt='logo'
        role='img'
        style={{ alignSelf: 'center', width: 200, height: 200 }}
      />
      <VStack space='md'>
        <Input>
          <InputField placeholder='Username' />
        </Input>
        <Input>
          <InputField placeholder='Email' />
        </Input>
        <Input>
          <InputField
            type={showPassword ? "text" : "password"}
            placeholder='Password'
          />
          <InputSlot pr="$3" onPress={toggleShowPassword}>
            <InputIcon
              as={showPassword ? EyeIcon : EyeOffIcon}
              size="lg"
            />
          </InputSlot>
        </Input>
        <Input>
          <InputField
            type={showConfirmPassword ? "text" : "password"}
            placeholder='Confirm Password'
          />
          <InputSlot pr="$3" onPress={toggleShowConfirmPassword}>
            <InputIcon
              as={showConfirmPassword ? EyeIcon : EyeOffIcon}
              size="lg"
            />
          </InputSlot>
        </Input>
      </VStack>
      <VStack sx={{
        "@base": {
          marginTop: '$10',
        },
        "@xs": {
          marginTop: '$20',
        },
      }}>
        <Button onPress={createAccount}>
          <ButtonText>Create Account</ButtonText>
        </Button>
        <Divider mt={'$6'} mb={'$3'} sx={{
          "@base": {
            marginTop: '$3',
            marginBottom: '$2',
          },
          "@xs": {
            marginTop: '$6',
            marginBottom: '$3',
          },
        }}/>
        <Text mb={'$4'} alignSelf='center' sx={{
          "@base": {
            marginBottom: '$3',
          },
          "@xs": {
            marginBottom: '$4',
          },
        }}>Already have an account?</Text>
        <Button onPress={goToSignIn} variant='outline'>
          <ButtonText>Sign In</ButtonText>
        </Button>
      </VStack>
      <Button onPress={skipRegistration} variant='link' sx={{
        "@base": {
          marginTop: '$10',
        },
        "@xs": {
          marginTop: '$20',
        },
      }}>
        <ButtonText>Skip for Now</ButtonText>
      </Button>
    </View>
  );

  if (Platform.OS === 'web') {
    return (
      <View px={"$40"}>
        {sharedContent}
      </View>
    );
  } else {
    return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {sharedContent}
      </TouchableWithoutFeedback>
    );
  }
}

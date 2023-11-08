import { Keyboard, TouchableWithoutFeedback, Platform, Image, useColorScheme } from 'react-native';
import { View, Input, InputField, LinkText, VStack, Button, ButtonText, Link, Divider, Text, InputSlot, InputIcon, EyeIcon, EyeOffIcon } from "@gluestack-ui/themed";
import { useRouter } from 'expo-router';
import { useState } from 'react';

export default function Signin() {
  const [showPassword, setShowPassword] = useState(false)
  const router = useRouter();
  const colorMode = useColorScheme();

  function toggleShowPassword() {
    setShowPassword((currentState) => {
      return !currentState;
    })
  }

  function skipSignin() {
    router.push('/(tabs)/one');
  }

  function register() {
    router.replace('/register');
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
          <InputField type={showPassword ? "text" : "password"} placeholder='Password' />
          <InputSlot pr="$3" onPress={toggleShowPassword}>
            <InputIcon
              as={showPassword ? EyeIcon : EyeOffIcon}
              size="lg"
            />
          </InputSlot>
        </Input>
      </VStack>
      <Link alignSelf='center' mt={'$4'} href='https://www.instagram.com/accounts/password/reset/'>
        <LinkText>Forgot Password?</LinkText>
      </Link>
      <VStack sx={{
        "@base": {
          marginTop: '$10',
        },
        "@xs": {
          marginTop: '$20',
        },
      }}>
        <Button>
          <ButtonText>Sign In</ButtonText>
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
        }}>Don't have an account?</Text>
        <Button onPress={register} variant='outline' >
          <ButtonText>Register now</ButtonText>
        </Button>
      </VStack>
      <Button onPress={skipSignin} variant='link' sx={{
        "@base": {
          marginTop: '$10',
        },
        "@xs": {
          marginTop: '$20',
        },
      }}>
        <ButtonText>Skip Sign In</ButtonText>
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

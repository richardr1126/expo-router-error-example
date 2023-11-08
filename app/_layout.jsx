import React, { useState, useEffect } from 'react';
import { Stack } from 'expo-router';
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "../config/gluestack-ui.config";
import { useColorScheme } from 'react-native';

export default function Layout() {
  const colorMode = useColorScheme();
  const [routerBackgroundColor, setRouterBackgroundColor] = useState('white'); 

  useEffect(() => {
    if (colorMode === 'dark') {
      setRouterBackgroundColor('black');
    } else {
      setRouterBackgroundColor('white');
    }
  }, [colorMode]);

  return (
    <GluestackUIProvider config={config} colorMode={colorMode}>
      <Stack
        screenOptions={{
          headerShown: false,
          gestureEnabled: false,
          contentStyle: {
            backgroundColor: routerBackgroundColor
          }
        }}
      >
        <Stack.Screen
          name="signin"
          options={{
            presentation: 'modal',
            gestureEnabled: true
          }}
        />
        <Stack.Screen
          name="register"
        />
      </Stack>
    </GluestackUIProvider>
  );
}

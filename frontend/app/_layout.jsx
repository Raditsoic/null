import { Stack, SplashScreen } from 'expo-router';
import { useFonts } from 'expo-font';
import React, { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [fontLoaded, error] = useFonts({
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Vollkorn-Medium": require("../assets/fonts/Vollkorn-Medium.ttf"),
    "Vollkorn-Bold": require("../assets/fonts/Vollkorn-Bold.ttf"),
  });

  useEffect(() => {
    if (error) throw error;
    if (fontLoaded) SplashScreen.hideAsync();
  }, [fontLoaded, error]);

  if (!fontLoaded && !error) return null;

  return (
    <>
      <Stack>
        <Stack.Screen
          name='index'
          options={{ headerShown: false }}
        />
      </Stack>
    </>
  )
}

export default RootLayout
import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View, Image, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

import { CustomButton } from '../components';
import { images } from '../constants';

export default function App() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className="h-[300px]"></View>
        <View className="flex">
          <Image
            source={images.wave}
            className="absolute z-0"
          />

          <View className="absolute z-10 top-48">
            <View className="flex-1 justify-center items-center">
            <Text className="mb-3 text-black font-pbold text-4xl text-center">
                Welcome!
              </Text>

              <Text className="mb-1 px-2 text-black font-vmedium text-2xl text-center">
                Looks like this is your first time here
              </Text>

              <Text className="px-4 text-black font-pregular text-lg text-center ">
                Press the button bellow to register or log in to your account
              </Text>

              <CustomButton
                title="Get Started ➡️"
                containerStyles="bg-black rounded-xl mt-8 w-48 h-12"
                textStyles="text-white text-lg font-psemibold"
                handlePress={() => router.push("/login")}
              />

            <Text>
              Go to <Link href="/home" className="text-blue-800">Main Page</Link>
            </Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <StatusBar style="light" />
    </SafeAreaView>
  );
}
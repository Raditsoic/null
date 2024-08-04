import { SafeAreaView, ScrollView, Text, View, Image } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

import { CustomButton } from '../../components'
import { images } from '../../constants'

const Home = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className="py-4 px-2 flex flex-row justify-between items-center">
          <View>
            <Text className="font-psemibold text-white text-xl">
              Welcome Back
            </Text>

            <Text className="font-pbold text-secondary text-3xl">
              Name
            </Text>
          </View>

          <View className="rounded-full bg-white h-10 w-10 border-2 border-secondary"></View>
        </View>

        <View className="flex justify-around h-[500px] px-2">
          <View>
            <Text className="text-white font-pbold text-2xl">
              Community
            </Text>

            <View className="h-40 flex justify-center items-center">
              <Image 
                source={images.space}
                className="w-full h-40 rounded-3xl absolute z-0"
              />

              <CustomButton
                title=""
                containerStyles="bg-white opacity-10 h-40 w-full rounded-3xl p-2 absolute z-10"
                handlePress={() => router.push('/community')}
              />

              <CustomButton 
                title="Go to Community 💬"
                textStyles={`absolute z-20 text-secondary font-pbold text-2xl`}
                handlePress={() => router.push('/community')}
              />
            </View>
          </View>

          <View>
            <Text className="text-white font-pbold text-2xl">
              Chatbot
            </Text>

            <View className="h-40 flex justify-center items-center">
              <Image 
                source={images.space}
                className="w-full h-40 rounded-3xl absolute z-0"
              />

              <CustomButton
                title=""
                containerStyles="bg-white opacity-10 h-40 w-full rounded-3xl p-2 absolute z-10"
                handlePress={() => router.push('/chatbot')}
              />

              <CustomButton 
                title="Go to Chatbot 🤖"
                textStyles={`absolute z-20 text-secondary font-pbold text-2xl`}
                handlePress={() => router.push('/community')}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
    
  )
}

export default Home
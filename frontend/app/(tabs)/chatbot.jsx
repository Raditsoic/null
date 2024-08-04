import { ScrollView, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Chatbot = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="flex flex-row justify-between px-2">
          <View className="flex flex-row justify-center items-center">
            <Text className="text-secondary font-pbold text-2xl">
              Chatbot
            </Text>
          </View>
          
          <View className="rounded-full bg-white h-10 w-10 border-2 border-secondary"></View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Chatbot
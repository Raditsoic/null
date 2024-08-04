import { ScrollView, Text, View, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import { CustomButton } from '../../components'
import { icons } from '../../constants'

const Community = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="flex flex-row justify-between px-2">
          <View className="flex flex-row justify-start items-center">
            <View className="h-[32px] w-[32px]">
              <Image 
                source={icons.burger}
                className="absolute z-0 h-[32px] w-[32px]"
              />

              <CustomButton 
                title=""
                containerStyles="h-[32px] w-[32px] absolute z-10"
                handlePress={() => alert('Burger button pressed')}
              />
            </View>

            <Text className="ml-4 text-secondary font-pbold text-2xl">
              Community
            </Text>
          </View>
          
          <View className="rounded-full bg-white h-10 w-10 border-2 border-secondary"></View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Community
import { ScrollView, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import { CustomButton } from '../../components'

const Profile = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="flex justify-center items-center px-2">
          <Text className="text-secondary font-pbold text-2xl mb-3">
            Profile
          </Text>

          <View className="bg-black h-[1000px] w-full rounded-xl p-4 border-[1px] border-white">
            <View className="flex flex-row">
              <Text className="text-secondary font-psemibold text-2xl">
                Username (?)
              </Text>

              {/* <CustomButton 
                title="Edit Profile"
                textStyles="text-darkGrey font-vmedium text-lg"
              /> */}
            </View>

            <Text className="text-white font-psemibold text-xl">
              Full Name
            </Text>

            <Text className="text-darkGrey font-vmedium text-lg">
              email@gmail.com
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Profile
import { View } from 'react-native'
import { router } from 'expo-router'

import CustomButton from './CostumButton'

const AuthPageButton = ({page}) => {
  if(page === 'login') return (
    <View className="bg-white mx-4 rounded-md h-12 flex flex-row p-1">
      <CustomButton 
        title="Sign In"
        containerStyles="bg-secondary flex-1 rounded-md flex justify-center items-center"
        textStyles="text-black font-pmedium text-lg"
      />

      <CustomButton 
        title="Sign Up"
        containerStyles="flex-1 rounded-md flex justify-center items-center"
        textStyles="text-darkGrey font-pmedium text-lg"
        handlePress={() => router.push('/register')}
      />
    </View>
  )

  if(page === 'register') return (
    <View className="bg-white mx-4 rounded-md h-12 flex flex-row p-1">
      <CustomButton 
        title="Sign In"
        containerStyles="flex-1 rounded-md flex justify-center items-center"
        textStyles="text-darkGrey font-pmedium text-lg"
        handlePress={() => router.push('/login')}
      />

      <CustomButton 
        title="Sign Up"
        containerStyles="bg-secondary flex-1 rounded-md flex justify-center items-center"
        textStyles="text-black font-pmedium text-lg"
      />
    </View>
  )
}

export default AuthPageButton

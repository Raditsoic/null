import { Text, View, TextInput } from 'react-native'
import React from 'react'

const FormField = ({title, placeholder, value, handleChangeText, otherStyles, textStyles, textInputStyles, ...props}) => {
  return (
    <View className={`px-4 ${otherStyles}`}>
      <Text className={`${textStyles}`}>{title}</Text>

      <View>
        <TextInput 
          className={`bg-white pl-2 font-vmedium rounded-md h-10 focus:border-2 focus:border-black ${textInputStyles}`}
          placeholder={placeholder}
          placeholderTextColor="#808080"
          value={value}
          onChangeText={handleChangeText}
          secureTextEntry={title === 'Password' || title === 'Confirm Password'}
          {...props}
        />
      </View>
    </View>
  )
}

export default FormField
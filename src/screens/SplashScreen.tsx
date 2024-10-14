import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const SplashScreen = ({navigation}) => {
  return (
    <TouchableOpacity className="flex-1 justify-center items-center" onPress={() => {navigation.replace("Login")}}>
      <Text>SplashScreen</Text>
    </TouchableOpacity>
  )
}

export default SplashScreen
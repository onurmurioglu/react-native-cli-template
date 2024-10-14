import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Login = ({navigation}) => {
  return (
    <TouchableOpacity className="flex-1 justify-center items-center" onPress={() => {navigation.navigate("Main")}}>
      <Text>Login</Text>
    </TouchableOpacity>
  )
}

export default Login
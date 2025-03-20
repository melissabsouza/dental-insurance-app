import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Login = () => {
  return (
    <View>
      <Text>Login</Text>

      <Text>Login</Text>
       <Link href='/pacientes'>
        <Text>Pacientes</Text>
        </Link>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})
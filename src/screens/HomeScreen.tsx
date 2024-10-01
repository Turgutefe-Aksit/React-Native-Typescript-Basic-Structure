import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomButton from 'components/CustomButton'
import { useAppNavigation } from '../navigation/useAppNavigation'

export default function HomeScreen() {
  const navigation = useAppNavigation();
  return (
    <View>
      <CustomButton onPress={()=>navigation.navigate("Onboarding", {screen:"LoginScreen"})}></CustomButton>
    </View>
  )
}

const styles = StyleSheet.create({})
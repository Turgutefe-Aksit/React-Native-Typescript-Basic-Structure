import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomButton from 'components/CustomButton'
import { useAppNavigation } from '../navigation/useAppNavigation'
import { auth } from '../../firebase'

export default function HomeScreen() {
  const navigation = useAppNavigation();

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigation.reset({
        index: 0,
        routes: [{ name: 'Onboarding', params: { screen: 'LoginScreen' } }],
      });
    } catch (error) {

    }
  };

  return (
    <View>
      <CustomButton onPress={()=>handleLogout()}></CustomButton>
    </View>
  )
}

const styles = StyleSheet.create({})
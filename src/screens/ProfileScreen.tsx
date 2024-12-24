import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'

export default function ProfileScreen() {
  const dispatch = useDispatch()
  return (
    <View>
      <Text>Profile</Text>
    </View>
  )
}

const styles = StyleSheet.create({})
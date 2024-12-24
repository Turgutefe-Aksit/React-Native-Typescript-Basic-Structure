import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
//import { RootState } from '../redux/store'
import { RootState } from '../store/store'

export default function ChatScreen() {
  
  const name   = useSelector((state:RootState) => state.userData.userName) //for just redux
  // const {value} = useSelector((state: RootState) => state.counter)

  return (
    <View>
      <Text> {name} </Text>
    </View>
  )
}

const styles = StyleSheet.create({})
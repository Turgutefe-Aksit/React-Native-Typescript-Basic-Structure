import { Text, TextInput, View,ViewStyle } from 'react-native'
import React from 'react'
import { styles } from './styles'

type Props = {
    placeHolder? : string;
    inputStyle? : ViewStyle;
  };


export default function index({placeHolder,inputStyle}:Props) {
  return (

    <View style={[styles.container,inputStyle]}>

      <TextInput style={styles.input} placeholder={placeHolder}>

      </TextInput>

    </View>
  )
}


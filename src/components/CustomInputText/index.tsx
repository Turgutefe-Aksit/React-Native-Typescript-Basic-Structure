import { Text, TextInput, TextInputProps, View,ViewStyle } from 'react-native'
import React from 'react'
import { styles } from './styles'

type Props = TextInputProps &{
    placeHolder? : string;
    inputStyle? : ViewStyle;
  };


export default function index({placeHolder,inputStyle, ...rest}:Props) {
  return (

    <View style={[styles.container,inputStyle]}>

      <TextInput style={styles.input} placeholder={placeHolder} {...rest}>

      </TextInput>

    </View>
  )
}


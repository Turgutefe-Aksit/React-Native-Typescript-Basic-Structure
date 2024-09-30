import { StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native'
import React from 'react'
import { styles } from './styles'

type Props = {
  textName? : string;
  buttonStyle? : ViewStyle;
};

export default function CustomButton({textName = "Button", buttonStyle}:Props) {
  

  return (
    
    <View>
      <TouchableOpacity style = {[styles.container, buttonStyle]}> 
          <Text style={styles.text}>
            {textName}
          </Text>
      </TouchableOpacity>
    </View>
  )
}




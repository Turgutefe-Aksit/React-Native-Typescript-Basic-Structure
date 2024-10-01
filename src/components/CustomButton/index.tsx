import { StyleSheet, Text, TouchableOpacity, View, ViewStyle,TouchableOpacityProps} from 'react-native'
import React from 'react'
import { styles } from './styles'


type Props = TouchableOpacityProps &{
  textName? : string;
  buttonStyle? : ViewStyle;
};

export default function CustomButton( {textName = "Button", buttonStyle, ...rest}:Props  ) {
  

  return (
    
    <View>
      <TouchableOpacity style = {[styles.container, buttonStyle]} {...rest}> 
          <Text style={styles.text}>
            {textName}
          </Text>
      </TouchableOpacity>
    </View>
  )
}




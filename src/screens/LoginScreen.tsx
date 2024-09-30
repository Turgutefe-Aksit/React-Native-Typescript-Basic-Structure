import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomButton from 'components/CustomButton'
import { CustomInputText } from 'components/index'





export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.inputs}>
        <CustomInputText placeHolder='Mail' inputStyle={styles.input}></CustomInputText>
        <CustomInputText placeHolder='Şifre' inputStyle={styles.input}></CustomInputText>
      </View>
      <View style={styles.buttons}>
        <CustomButton textName='Giriş' buttonStyle={styles.button} ></CustomButton>
        <CustomButton textName='Kayıt' buttonStyle={styles.button}></CustomButton>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  inputs:{
    
  },
  buttons:{
    flexDirection:"row",
  },
  button:{
    margin : 20,
  },
  input:{
    margin : 20,
  },
})
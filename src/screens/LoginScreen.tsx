import { Image, StyleSheet, Text, View ,Alert} from 'react-native'
import React, { useEffect, useState } from 'react'
import CustomButton from 'components/CustomButton'
import { CustomInputText } from 'components/index'
import { auth } from '../../firebase'
import { useAppNavigation } from '../navigation/useAppNavigation';
import { Screen } from 'react-native-screens'


export default function LoginScreen() {
  const navigation = useAppNavigation()

  const [mail, setMail] = useState("")
  const [password, setPassword] = useState("")

  useEffect(()=>{
      auth.onAuthStateChanged(user =>{
          if(user){
              //navigation.navigate("")
          }
      })
  },[])

  const handleSingUp = () =>{
      auth.createUserWithEmailAndPassword(mail,password).
      then(userCredentails => {
          const user = userCredentails.user;
          console.log(user?.email)
      }).
      catch(e=> Alert.alert(e.message))
  }

  const handleLogin = () =>{
      auth.signInWithEmailAndPassword(mail,password).
      then(userCredentails => {
          const user = userCredentails.user;
          navigation.navigate("Onboarding", {screen:"HomeScreen"})

      }).
      catch(e=> Alert.alert(e.message))
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputs}>
        <CustomInputText 
          placeHolder='Mail' 
          inputStyle={styles.input}  
          value={mail} 
          onChangeText={text => setMail(text)}  
        ></CustomInputText>

        <CustomInputText 
          placeHolder='Şifre' 
          inputStyle={styles.input}  
          secureTextEntry
          value={password} 
          onChangeText={text => setPassword(text)}></CustomInputText>
      </View>


      <View style={styles.buttons}>
        <CustomButton textName='Giriş' buttonStyle={styles.button} onPress={handleLogin}></CustomButton>
        <CustomButton textName='Kayıt' buttonStyle={styles.button} onPress={handleSingUp} ></CustomButton>
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
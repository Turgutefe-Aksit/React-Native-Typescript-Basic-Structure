import { NavigatorScreenParams } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "screens/HomeScreen";
import LoginScreen from "screens/LoginScreen";

export type RootStackParamList = {
    Onboarding:NavigatorScreenParams<OnboardingStackParamList>
}

export type OnboardingStackParamList = {
    HomeScreen:undefined;
    LoginScreen:undefined;
}

const RootStack = createNativeStackNavigator<RootStackParamList>();
const OnboardingStack = createNativeStackNavigator<OnboardingStackParamList>();

const OnboardingNavigator = () =>{
    return(
        <OnboardingStack.Navigator>
            <OnboardingStack.Screen name="HomeScreen" component={HomeScreen}></OnboardingStack.Screen>
            <OnboardingStack.Screen name="LoginScreen" component={LoginScreen}></OnboardingStack.Screen>
        </OnboardingStack.Navigator>
    )
}

export const RootNavigator =() =>{
    return(
        <RootStack.Navigator
        screenOptions={{
            headerShown:false,
        }}>
            <RootStack.Screen name="Onboarding" component={OnboardingNavigator}></RootStack.Screen>
        </RootStack.Navigator>
    )
}
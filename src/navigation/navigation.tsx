import { NavigatorScreenParams } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icons from 'react-native-vector-icons/Ionicons';
import HomeScreen from "screens/HomeScreen";
import LoginScreen from "screens/LoginScreen";
import ChatScreen from "screens/ChatScreen";
import InfoScreen from "screens/InfoScreen";

export type RootStackParamList = {
    Onboarding:NavigatorScreenParams<OnboardingStackParamList>
}

export type OnboardingStackParamList = {
    HomeScreen:undefined;
    LoginScreen:undefined;
    BottomTabs:undefined;
}

export type BottomTabParamList = {
    HomeScreenTab:undefined;
    ChatScreenTab:undefined;
    InfoScreenTab:undefined;
}

const RootStack = createNativeStackNavigator<RootStackParamList>();
const OnboardingStack = createNativeStackNavigator<OnboardingStackParamList>();
const Tab = createBottomTabNavigator<BottomTabParamList>();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator 
        screenOptions={{
            headerShown:true,
            headerTitle:"Solagram",
            tabBarActiveBackgroundColor: "#C0C0C0",
            tabBarActiveTintColor:"black",
        }}>
            <Tab.Screen 
                name="HomeScreenTab"
                component={HomeScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <Icons name="home" color="black" size={25} />
                    ),
                  }} />

            <Tab.Screen 
                name="ChatScreenTab" 
                component={ChatScreen}
                options={{
                    tabBarLabel: 'Chat',
                    tabBarIcon: ({ color, size }) => (
                        <Icons name="logo-wechat" color="black" size={25} />
                    ),
                  }} />

            <Tab.Screen 
                name="InfoScreenTab" 
                component={InfoScreen} 
                options={{
                    tabBarLabel: 'Info',
                    tabBarIcon: ({ color, size }) => (
                        <Icons name="podium-outline" color="black" size={25} />
                    ),
                  }}/>
        </Tab.Navigator>
    );
}



const OnboardingNavigator = () =>{
    return(
        <OnboardingStack.Navigator screenOptions={{
            headerShown:false,
        }}>   
            <OnboardingStack.Screen name="LoginScreen" component={LoginScreen} ></OnboardingStack.Screen>
            <OnboardingStack.Screen name="BottomTabs" component={BottomTabNavigator} />
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
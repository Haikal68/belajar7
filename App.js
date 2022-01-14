import React,{Component} from 'react';
import {View, Image, Text,Button} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer, getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/Ionicons';

import Homepage from './src/views/homepage';
import ChatRoute from './src/views/ChatRoute';
import ChatScreen from './src/views/ChatScreen';
import ProfilePage from './src/views/ProfilePage';
import Notificationpage from './src/views/NotificationPage';
import CartPage from './src/views/CartPage';
import Register from './src/views/Register';
import Login from './src/views/Login';
import UseStates from './src/views/UseStates';
import detail from './src/views/detail';

import {
  HeaderButtons,
  HeaderButton,
  Item,
  HiddenItem,
  OverflowMenu,
} from 'react-navigation-header-buttons';
import { TouchableOpacity } from 'react-native-gesture-handler';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Bottom(){
  return(
    <Tab.Navigator>   
      <Tab.Screen name="Homepage" component={Homepage} options={{
        headerTitle:'SMK TELKOM MEDAN',
        headerTintColor:'white',
        headerStyle: {           
          backgroundColor: '#b02323',
        },
        tabBarIcon: ({focused}) => (
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Image 
            source={require('./src/assets/home2.png')} 
            resizeMode= 'contain'
            style={{
              width:25, 
              height: 25,
              tintColor: focused ? '#b02323' : '#000000'
            }}
            />
            {/* <Text style={{color: focused ? '#1cd94e' : '#000000',}}>HOME</Text> */}
          </View>
        )
      }} />
    
      <Tab.Screen name="Kotak Masuk" component={Notificationpage} options={{
        // tabBarLabel: 'Notification',
        headerStyle: {           
          backgroundColor: 'white',
        },
        headerTintColor: 'black',
        headerTitleAlign:'center',
        headerTitleStyle: {
          justifyContent:'center',
          alignItems:'center',
          fontSize: 20
        },
        tabBarIcon: ({focused}) => (
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Image 
            source={require('./src/assets/notif2.png')} 
            resizeMode= 'contain'
            style={{
              width:25, 
              height: 25,
              tintColor: focused ? '#b02323' : '#000000'
            }}
            />
            {/* <Text style={{color: focused ? '#1cd94e' : '#000000',}}>Notifications</Text> */}
          </View>
        )
      }} />
      <Tab.Screen name="Profile" component={ProfilePage} options={{
      tabBarIcon: ({focused}) => (
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Image 
          source={require('./src/assets/profile2.png')} 
          resizeMode= 'contain'
          style={{  
            width:25, 
            height: 25,
            tintColor: focused ? '#b02323' : '#000000'
          }}
          />
          {/* <Text style={{color: focused ? '#1cd94e' : '#000000',}}>PROFILE</Text> */}
        </View>
      )
    }} />
    </Tab.Navigator>
  )
}

const App: () => Node = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Bottom" component={Bottom} options={{ headerShown: false}} />
        <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
        <Stack.Screen name="ChatScreen" component={ChatScreen} />
        <Stack.Screen name="ProfilePage" component={ProfilePage} options={{ headerShown: false }} />
        <Stack.Screen name="UseStates" component={UseStates} options={{ headerShown: false }} />
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

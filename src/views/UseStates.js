
import React , { useState } from 'react';
import {
  Box,
  Heading,
  VStack,
  FormControl,
  Input,
  Button,
  Center,
  NativeBaseProvider,
  Text,
  HStack,
  Image,
  Link,
  Divider,
  Circle
} from "native-base"
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { useNavigation,NavigationContainer } from '@react-navigation/native';



const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


export const UseStates = () => {
    const navigation = useNavigation();  
    const [num,setNum] = useState(0)
    function kurang () {
      setNum(prevCon => prevCon -1)
    }
  
    function tambah () {
      setNum(prevCon => prevCon +1)
    }
    function reset () {
      setNum(prevCon => prevCon = 0)
    }
  
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3" bgColor="muted.400">
        <Box >
          
          <Box style= {{marginTop:300,}}>
          <Button borderRadius={10} colorScheme='red' onPress={kurang}>--</Button>
        
          <Center><Text py={5}>{num}</Text></Center>
          
          <Button borderRadius={10} colorScheme='red' onPress={tambah}>+</Button>

          <Button my={5} borderRadius={10} colorScheme='red' onPress={reset}>reset</Button>

              
          </Box>
          <Box style = {{marginTop:100}}>
          <Button colorScheme="red" onPress={() => navigation.navigate('Login')} >
            Kembali Ke Login Form
          </Button>
          </Box>
        </Box>
      </Center>
    </NativeBaseProvider>
  )
}

export default UseStates;
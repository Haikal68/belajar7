import * as React from "react"
import {
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  HStack,
  Center,
  NativeBaseProvider,
  Image
} from "native-base"
import {Bottom} from '../../App';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { useNavigation,NavigationContainer } from '@react-navigation/native';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();




export const Login = () => {
  const navigation = useNavigation();    

  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
    <Box safeArea p="2" py="8" w="90%" maxW="290">
      <Center px="3">
      <Image
        source={{
          uri: "https://smktelkom-pwt.sch.id/wp-content/uploads/2019/02/logo-telkom-schools-vertikal-768x1051.png",
        }}
        alt="Alternate Text"
        resizeMode="contain"
        size="200"
        
      />
      </Center>

      <VStack space={3} mt="5">
        <FormControl>
          <FormControl.Label>Email / ID</FormControl.Label>
          <Input />
        </FormControl>
        <FormControl>
          <FormControl.Label>Password</FormControl.Label>
          <Input type="password" />
        </FormControl>
        <Button mt="2" colorScheme="red" onPress={() => navigation.navigate('Bottom')}>
          Login
        </Button>
        <HStack mt="6" justifyContent="center">
          <Text
            fontSize="sm"
            color="coolGray.600"
            _dark={{
              color: "warmGray.200",
            }}
          >
            Belum Punya Akun.{" "}
          </Text>
          <Link
            _text={{
              color: "indigo.500",
              fontWeight: "medium",
              fontSize: "sm",
            }}
            onPress={() => navigation.navigate('Register')}
          >
            Daftar
          </Link>
        </HStack>
        <Button mt="2" colorScheme="red" onPress={() => navigation.navigate('UseStates')}>
          UseState
        </Button>
      </VStack>
    </Box>  
    </Center>
    </NativeBaseProvider>
  )
}

export default Login ;


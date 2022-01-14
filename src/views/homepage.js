import React from "react"
import {
  Pressable,
  Text,
  Box,
  HStack,
  Spacer,
  Flex,
  Center,
  NativeBaseProvider,
  Icon,
  Heading,
  ScrollView,
  Image,
} from "native-base"
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';



export function homepage() {
  return (
    <NativeBaseProvider>
      <ScrollView>
      <Image
      source={{
        uri: "https://i.ytimg.com/vi/6oFEI0eEqLE/maxresdefault.jpg",
      }}
      alt="Alternate Text"
      w="100%"
      h={170}
      />
      <HStack m="3" space={5}>
        <Pressable>
          {({ isHovered, isFocused, isPressed }) => {
            return (
              <Box
                
                bg={isPressed ? "light.100" : isHovered ? "light.50" : "light.50"}
                p="1"
                rounded="9"
                h="120"
                w="110"
                shadow={8}
                style={{
                  transform: [
                    {
                      scale: isPressed ? 0.96 : 1,
                    },
                  ],
                }}
              >
                <Center>
                    <Icon
                      as={FontAwesome}
                      name="clock-o"
                      color="warning.500"
                      mt={3}
                      size="lg"
                      _dark={{
                        color: "warmGray.50",
                      }}
                    />
                  
                  <Text color="light.800" fontWeight="normal" fontSize={18}>
                    Jadwal
                  </Text>
                  <Text color="light.800" fontWeight="normal" fontSize={18}>Pelajaran</Text>
                </Center> 
              </Box>
            )
          }}
        </Pressable>
        <Pressable>
          {({ isHovered, isFocused, isPressed }) => {
            return (
              <Box
                
                bg={isPressed ? "light.100" : isHovered ? "light.50" : "light.50"}
                p="1"
                rounded="9"
                h="120"
                w="110"
                shadow={8}
                style={{
                  transform: [
                    {
                      scale: isPressed ? 0.96 : 1,
                    },
                  ],
                }}
              >
                <Center>
                    <Icon
                      as={FontAwesome}
                      name="pencil"
                      color="info.700"
                      mt={3}
                      size="lg"
                      _dark={{
                        color: "warmGray.50",
                      }}
                    />
                  
                  <Text color="light.800" fontWeight="normal" fontSize={18}>
                    Catatan
                  </Text>
                  <Text color="light.800" fontWeight="normal" fontSize={18}>Tugas</Text>
                </Center> 
              </Box>
            )
          }}
        </Pressable>
        <Pressable>
          {({ isHovered, isFocused, isPressed }) => {
            return (
              <Box
                
                bg={isPressed ? "light.100" : isHovered ? "light.50" : "light.50"}
                p="1"
                rounded="9"
                h="120"
                w="110"
                shadow={8}
                style={{
                  transform: [
                    {
                      scale: isPressed ? 0.96 : 1,
                    },
                  ],
                }}
              >
                <Center>
                    <Icon
                      as={FontAwesome}
                      name="check"
                      color="success.400"
                      mt={3}
                      size="lg"
                      _dark={{
                        color: "warmGray.50",
                      }}
                    />
                  
                  <Text color="light.800" fontWeight="normal" fontSize={18}>
                    Kehadiran
                  </Text>
                  <Text color="light.800" fontWeight="normal" fontSize={18}>Hari Ini</Text>
                </Center> 
              </Box>
            )
          }}
        </Pressable>
        
      </HStack>
      <HStack m="3" space={5}>
        <Pressable>
          {({ isHovered, isFocused, isPressed }) => {
            return (
              <Box
                
                bg={isPressed ? "light.100" : isHovered ? "light.50" : "light.50"}
                p="1"
                rounded="9"
                h="120"
                w="110"
                shadow={8}
                style={{
                  transform: [
                    {
                      scale: isPressed ? 0.96 : 1,
                    },
                  ],
                }}
              >
                <Center>
                    <Icon
                      as={FontAwesome}
                      name="warning"
                      color="error.600"
                      mt={3}
                      size="lg"
                      _dark={{
                        color: "warmGray.50",
                      }}
                    />
                  
                  <Text color="light.800" mt={3} fontWeight="normal" fontSize={18}>
                    Pelanggaran
                  </Text>
                  
                </Center> 
              </Box>
            )
          }}
        </Pressable>
        <Pressable>
          {({ isHovered, isFocused, isPressed }) => {
            return (
              <Box
                
                bg={isPressed ? "light.100" : isHovered ? "light.50" : "light.50"}
                p="2"
                rounded="9"
                h="120"
                w="110"
                shadow={8}
                style={{
                  transform: [
                    {
                      scale: isPressed ? 0.96 : 1,
                    },
                  ],
                }}
              >
                <Center>
                    <Icon
                      as={MaterialCommunityIcons}
                      name="credit-card-outline"
                      color="warning.500"
                      mt={3}
                      size="lg"
                      _dark={{
                        color: "warmGray.50",
                      }}
                    />
                  
                  <Text color="light.800" mt={3} fontWeight="normal" fontSize={18}>
                    Tagihan
                  </Text>
                
                </Center> 
              </Box>
            )
          }}
        </Pressable>
        <Pressable>
          {({ isHovered, isFocused, isPressed }) => {
            return (
              <Box
                
                bg={isPressed ? "light.100" : isHovered ? "light.50" : "light.50"}
                p="1"
                rounded="9"
                h="120"
                w="110"
                shadow={8}
                style={{
                  transform: [
                    {
                      scale: isPressed ? 0.96 : 1,
                    },
                  ],
                }}
              >
                <Center>
                    <Icon
                      as={FontAwesome}
                      name="calendar"
                      color="info.700"
                      mt={3}
                      size="lg"
                      _dark={{
                        color: "warmGray.50",
                      }}
                    />
                  
                  <Text color="light.800" mt={3} fontWeight="normal" fontSize={18}>
                    Agenda
                  </Text>
                </Center> 
              </Box>
            )
          }}
        </Pressable>
        
      </HStack>
      <HStack m="3" space={5}>
        <Pressable>
          {({ isHovered, isFocused, isPressed }) => {
            return (
              <Box
                
                bg={isPressed ? "light.100" : isHovered ? "light.50" : "light.50"}
                p="1"
                rounded="9"
                h="120"
                w="110"
                shadow={8}
                style={{
                  transform: [
                    {
                      scale: isPressed ? 0.96 : 1,
                    },
                  ],
                }}
              >
                <Center>
                    <Icon
                      as={FontAwesome}
                      name="pie-chart"
                      color="success.400"
                      mt={3}
                      size="lg"
                      _dark={{
                        color: "warmGray.50",
                      }}
                    />
                  
                  <Text color="light.800" mt={3} fontWeight="normal" fontSize={18}>
                    Absensi
                  </Text>
                  
                </Center> 
              </Box>
            )
          }}
        </Pressable>
        <Pressable>
          {({ isHovered, isFocused, isPressed }) => {
            return (
              <Box
                
                bg={isPressed ? "light.100" : isHovered ? "light.50" : "light.50"}
                p="2"
                rounded="9"
                h="120"
                w="110"
                shadow={8}
                style={{
                  transform: [
                    {
                      scale: isPressed ? 0.96 : 1,
                    },
                  ],
                }}
              >
                <Center>
                    <Icon
                      as={FontAwesome}
                      name="chevron-circle-up"
                      color="info.700"
                      mt={3}
                      size="lg"
                      _dark={{
                        color: "warmGray.50",
                      }}
                    />
                  
                  <Text color="light.800" fontWeight="normal" fontSize={18}>
                    Presensi
                  </Text>
                  <Text color="light.800" fontWeight="normal" fontSize={18}>Masuk</Text>
                
                </Center> 
              </Box>
            )
          }}
        </Pressable>
        <Pressable>
          {({ isHovered, isFocused, isPressed }) => {
            return (
              <Box
                
                bg={isPressed ? "light.100" : isHovered ? "light.50" : "light.50"}
                p="1"
                rounded="9"
                h="120"
                w="110"
                shadow={8}
                style={{
                  transform: [
                    {
                      scale: isPressed ? 0.96 : 1,
                    },
                  ],
                }}
              >
                <Center>
                    <Icon
                      as={FontAwesome}
                      name="chevron-circle-down"
                      color="error.600"
                      mt={3}
                      size="lg"
                      _dark={{
                        color: "warmGray.50",
                      }}
                    />
                  
                  <Text color="light.800" fontWeight="normal" fontSize={18}>
                    Presensi
                  </Text>
                  <Text color="light.800" fontWeight="normal" fontSize={18}>Pulang</Text>
                
                </Center> 
              </Box>
            )
          }}
        </Pressable>
        
      </HStack>
      <HStack m="3" space={5}>
        <Pressable>
          {({ isHovered, isFocused, isPressed }) => {
            return (
              <Box
                
                bg={isPressed ? "light.100" : isHovered ? "light.50" : "light.50"}
                p="1"
                rounded="9"
                h="120"
                w="110"
                shadow={8}
                style={{
                  transform: [
                    {
                      scale: isPressed ? 0.96 : 1,
                    },
                  ],
                }}
              >
                <Center>
                    <Icon
                      as={FontAwesome}
                      name="file-text"
                      color="warning.500"
                      mt={3}
                      size="lg"
                      _dark={{
                        color: "warmGray.50",
                      }}
                    />
                  
                  <Text color="light.800" mt={3} fontWeight="normal" fontSize={18}>
                    Rapor
                  </Text>
                  
                </Center> 
              </Box>
            )
          }}
        </Pressable>
        
      </HStack>

      <Heading m={3} size="sm">Direktori Sekolah</Heading>

      <HStack m="3" space={5}>
        <Pressable>
          {({ isHovered, isFocused, isPressed }) => {
            return (
              <Box
                
                bg={isPressed ? "light.100" : isHovered ? "light.50" : "light.50"}
                p="1"
                rounded="9"
                h="120"
                w="110"
                shadow={8}
                style={{
                  transform: [
                    {
                      scale: isPressed ? 0.96 : 1,
                    },
                  ],
                }}
              >
                <Center>
                    <Icon
                      as={FontAwesome}
                      name="address-book"
                      color="warning.500"
                      mt={3}
                      size="lg"
                      _dark={{
                        color: "warmGray.50",
                      }}
                    />
                  
                  <Text color="light.800" fontWeight="normal" fontSize={18}>
                    Teman
                  </Text>
                  <Text color="light.800" fontWeight="normal" fontSize={18}>Sekelas</Text>
                  
                </Center> 
              </Box>
            )
          }}
        </Pressable>
        <Pressable>
          {({ isHovered, isFocused, isPressed }) => {
            return (
              <Box
                
                bg={isPressed ? "light.100" : isHovered ? "light.50" : "light.50"}
                p="2"
                rounded="9"
                h="120"
                w="110"
                shadow={8}
                style={{
                  transform: [
                    {
                      scale: isPressed ? 0.96 : 1,
                    },
                  ],
                }}
              >
                <Center>
                    <Icon
                      as={FontAwesome}
                      name="users"
                      color="success.400"
                      mt={3}
                      size="lg"
                      _dark={{
                        color: "warmGray.50",
                      }}
                    />
                  
                  <Text color="light.800" mt={3} fontWeight="normal" fontSize={18}>
                    Daftar Guru
                  </Text>
                  
                
                </Center> 
              </Box>
            )
          }}
        </Pressable>
        <Pressable>
          {({ isHovered, isFocused, isPressed }) => {
            return (
              <Box
                
                bg={isPressed ? "light.100" : isHovered ? "light.50" : "light.50"}
                p="1"
                rounded="9"
                h="120"
                w="110"
                shadow={8}
                style={{
                  transform: [
                    {
                      scale: isPressed ? 0.96 : 1,
                    },
                  ],
                }}
              >
                <Center>
                    <Icon
                      as={Entypo}
                      name="graduation-cap"
                      color="error.600"
                      mt={3}
                      size="lg"
                      _dark={{
                        color: "warmGray.50",
                      }}
                    />
                  
                  <Text color="light.800" fontWeight="normal" fontSize={18}>
                    Tentang
                  </Text>
                  <Text color="light.800" fontWeight="normal" fontSize={18}>Sekolah</Text>
                
                </Center> 
              </Box>
            )
          }}
        </Pressable>
        
      </HStack>
      </ScrollView>
    </NativeBaseProvider>
  )
}

export default homepage;
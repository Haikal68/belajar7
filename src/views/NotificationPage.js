import * as React from 'react';
import { View, useWindowDimensions,Image,Text, Touchable} from 'react-native';
import { TabView, SceneMap,TabBar } from 'react-native-tab-view';
import { Card, Title, Paragraph ,Avatar,IconButton,Button, Divider} from 'react-native-paper';
import { CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PesanScreen from './ChatScreen';
import NotifikasiRoute from './NotifikasiRoute';
import ChatRoute from './ChatRoute';



// const NotifikasiRoute = () => (
  // <View>
  //   <View>
  //     <ScrollView>
  //       <View style={{backgroundColor:'white', flexDirection:'row'}}>
  //         <Image 
  //           source={require('../assets/doctor.png')}
  //           style={{margin:20,width:45,height:45,borderRadius:50,backgroundColor:'red'}}
  //         />
  //         <View>
  //           <Text style={{marginTop:20}}>TOKO MAKMUR FALRELR</Text>
  //           <Text style={{marginTop:12}}>Ready Gan</Text>
  //         </View>
  //       </View>
  //     </ScrollView>
  //   </View>
  // </View>
// );

// const ChatRoute = () => (
//   <View style={{backgroundColor:'red'}}>
//     <ScrollView>
//       <TouchableOpacity onPress={() => navigation.navigate('InChat')}>
//         <Card>
//           <CardTitle
//             style={{margin:10,}}
//             title="TOKO MAKMUR SEJAHTERA"
//             subtitle="Ready Kak"
//             avatarSource={require('../assets/doctor.png')}
//           />        
//         </Card>
//       </TouchableOpacity>
//       <Card>
//         <CardTitle
//           style={{margin:5}} 
//           title="TOKO MAKMUR SEJAHTERA"
//           subtitle="Langsung Datang Aja"
//           avatarSource={require('../assets/2dokter.png')}
//         />
//       </Card>
//       <Divider/>
//       <Card>
//         <CardTitle
//           style={{margin:5}} 
//           title="TOKO MAKMUR SEJAHTERA"
//           subtitle="Ready Kak"
//           avatarSource={require('../assets/virus.png')}
//         />
//       </Card>
//       <Divider/>
//       <Card>
//         <CardTitle
//           style={{margin:5}}
//           title="GROSIR FALRELR"
//           subtitle="Semua Ada Disini Kak"
//           avatarSource={require('../assets/dokter.png')}
//         />
//       </Card>
//     </ScrollView>
//   </View>
// );

const renderScene = SceneMap({
  Notifikasi: NotifikasiRoute,
  Chat: ChatRoute,
});

// const renderScene = ({ route }) => {
//   switch (route.key) {
//     case 'Notifikasi':
//       return <NotifikasiRoute navigation={navigation} />;
//     case 'ChatRoute':
//       return <ChatRoute navigation={navigation} />;
//     default:
//       return null;
//   }
// };

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{ backgroundColor: '#b02323' }}
    style={{ backgroundColor: 'white' }}
    inactiveColor='black'
    activeColor='#b02323'
  />
);

export default function TabViewExample() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'Notifikasi', title: 'Notifikasi' },
    { key: 'Chat', title: 'Chat' },
  ]);

  

  return (
    <TabView
      navigationState={{ index, routes }}
      renderTabBar={renderTabBar}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
}
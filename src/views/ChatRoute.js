import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image} from 'react-native';
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Card, Title, Paragraph ,Avatar,IconButton,Button, Divider} from 'react-native-paper';
import { CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
import { useNavigation,NavigationContainer } from '@react-navigation/native';
import ChatScreen from './ChatScreen';
import App from '../../App';

import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function ChatRoute({}) {    
    const navigation = useNavigation();    
    return (
        <View style={{flex:1,backgroundColor:'white'}}>  
            <ScrollView>
            <TouchableOpacity onPress={() => navigation.navigate('detail')}>
                <Card>
                <CardTitle
                    style={{margin:10}}
                    title="TOKO MAKMUR SEJAHTERA"
                    subtitle="Ready Kak"
                    avatarSource={require('../assets/doctor.png')}
                />        
                </Card>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('ChatScreen')}>
            <Card>
                <CardTitle
                style={{margin:5}} 
                title="TOKO MAKMUR SEJAHTERA"
                subtitle="Langsung Datang Aja"
                avatarSource={require('../assets/2dokter.png')}
                />
            </Card>
            </TouchableOpacity>
            <Divider/>
            <TouchableOpacity onPress={() => navigation.navigate('ChatScreen')}>
            <Card>
                <CardTitle
                style={{margin:5}} 
                title="TOKO MAKMUR SEJAHTERA"
                subtitle="Ready Kak"
                avatarSource={require('../assets/virus.png')}
                />
            </Card>
            </TouchableOpacity>
            <Divider/>
            <TouchableOpacity onPress={() => navigation.navigate('ChatScreen')}>
            <Card>
                <CardTitle
                style={{margin:5}}
                title="GROSIR FALRELR"
                subtitle="Semua Ada Disini Kak"
                avatarSource={require('../assets/dokter.png')}
                />
            </Card>
            </TouchableOpacity>
            <Divider/>
            </ScrollView>
      </View>
    );
}
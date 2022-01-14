import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Card, Title, Paragraph ,Avatar,IconButton,Button, Divider} from 'react-native-paper';
import { CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/Ionicons';

export default function NotifikasiRoute({ navigation }) {       

    return (
        <View  style={{flex:1,backgroundColor:'white'}}>
        <ScrollView>
            <TouchableOpacity style={{backgroundColor:'white', flexDirection:'row',paddingHorizontal:20,paddingVertical:20}}>
                <View style={{borderRadius: 60 / 2,
                            width:50,
                            backgroundColor: '#a0dbb0',
                            tintColor:'#0c9c32',
                            borderColor: '#a0dbb0',
                            height:50,
                            borderWidth: 3}}>

                    <MaterialCommunityIcons name="google-hangouts" size={30} color="#0c9c32" style={{width: 30,
                            height: 30,
                            marginTop:7,
                            marginHorizontal:7}}/>
                </View>
                <View style={{flex:1,justifyContent:"center",marginHorizontal:20,}}>
                    <View style={{flexDirection:'row',flex:1,flexWrap:'wrap',justifyContent:'space-between'}}>
                        <Text style={{marginBottom:3,fontWeight:'bold',fontSize:15,}}>Feedback</Text>
                        <Text>Sen</Text>
                    </View>
                    <Text>Apa Kamu Suka Martabak Terang Bulan</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor:'white', flexDirection:'row',paddingHorizontal:20,paddingVertical:20}}>
                <View style={{borderRadius: 60 / 2,
                            width:50,
                            backgroundColor: '#a0dbb0',
                            tintColor:'#0c9c32',
                            borderColor: '#a0dbb0',
                            height:50,
                            borderWidth: 3}}>

                    <MaterialCommunityIcons name="credit-card" size={30} color="#0c9c32" style={{width: 30,
                            height: 30,
                            marginTop:7,
                            marginHorizontal:7}}/>
                </View>
                <View style={{flex:1,justifyContent:"center",marginHorizontal:20}}>
                    <View style={{flexDirection:'row',flex:1,flexWrap:'wrap',justifyContent:'space-between'}}>
                        <Text style={{marginBottom:3,fontWeight:'bold',fontSize:15}}>Transaksi</Text>
                        <Text>Sen</Text>
                    </View>
                        <Text>Voucher-Vouchermu sudah bisa dipakai</Text>
                    
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor:'white', flexDirection:'row',paddingHorizontal:20,paddingVertical:20}}>
                <View style={{borderRadius: 60 / 2,
                            width:50,
                            backgroundColor: '#eddaca',
                            borderColor: '#eddaca',
                            height:50,
                            borderWidth: 3}}>

                    <MaterialCommunityIcons name="beaker" size={30} color="#cf7123" style={{width: 30,
                            height: 30,
                            marginTop:7,
                            marginHorizontal:7}}/>
                </View>
                <View style={{flex:1,justifyContent:"center",marginHorizontal:20}}>
                    <View style={{flexDirection:'row',flex:1,flexWrap:'wrap',justifyContent:'space-between'}}>
                        <Text style={{marginBottom:3,fontWeight:'bold',fontSize:15}}>Promo Minyak Bimoli</Text>
                        <Text>Sen</Text>
                    </View>
                    <Text>Waaahhhh, Minyak Bimoli Lagi Promo Nih</Text>
                </View>
            </TouchableOpacity>
            <Divider/>
            <Divider/>
        </ScrollView>
        </View>
    );
}
import React, {useState} from 'react'
import { View, Text, TouchableOpacity, StyleSheet, TextInput, ScrollView } from 'react-native';


const homepage= () => {
    return (
      <ScrollView>
        <Text>CART PAGE</Text>
      </ScrollView>
    )
}

export default homepage;

const style = StyleSheet.create({
    header: {
      paddingVertical: 10,
      paddingHorizontal: 20,
      flexDirection: 'row',
      backgroundColor: "blue",
      alignItems : 'center',
    },
    footer:{
      // paddingVertical: 10,
      // paddingHorizontal: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
      
  
    },
    headerTitle: {
      color: "white",  
      fontWeight: 'bold',
      fontSize: 25,
    },
    inputContainer: {
      height: 65,
      width: '90%',
      backgroundColor: "white",
      borderRadius: 10,
      top: 10,
      flexDirection: 'row',
      alignItems: 'center',
      elevation: 12,
      alignSelf: 'center',
      marginVertical: 13,
    },
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: '#f1f8ff' },
    text: { margin: 6 },
});

import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, Button } from 'react-native';

export default class Header extends React.Component {

    render() {
        return(
            <View style={{backgroundColor: '#007be8', alignItems:'center' , justifyContent: 'center', padding:30}}>
            <Text style={{backgroundColor:'#007be8', color:'#fff'}}>
                Quiz App
            </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#007be8',
      alignItems: 'center',
      justifyContent: 'center',
      height:'20%'
      
    },
  
    camera: {
  
      flex: 1,
  
      justifyContent: 'space-between',
  
    },
  });
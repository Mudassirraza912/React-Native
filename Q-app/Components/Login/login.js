import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import firebase from '../Config/config'
export default class Login extends React.Component{
constructor(props) {
    super(props)
}
async logIn() {
  // const {authTok} = this.props
        try {
          const {
            type,
            token,
            expires,
            permissions,
            declinedPermissions,
          } = await Expo.Facebook.logInWithReadPermissionsAsync('2517718014921933', {
            permissions: ['public_profile'],
          });
          if (type === 'success') {
            // Get the user's name using Facebook's Graph API
        
            const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
            Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
          //  authTok(token)
          } else {
            // type === 'cancel'
          }
        } catch ({ message }) {
          alert(`Facebook Login Error: ${message}`);
        }
      }

    render() {
        return(
            <View>
               <Button title='Login With Facebook' onPress={this.logIn}/>
            </View>
        )
    }
}


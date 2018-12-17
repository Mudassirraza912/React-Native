import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './Components/Login/login'
import Navigator from './Components/Navigator/navigator'

export default class App extends React.Component {
constructor() {
  super();
  this.state={
 authToken:''
  }
  this.auth = this.auth.bind(this)
}
auth(auth) {
this.setState({
  authToken : auth
})
console.log(auth)
}
  render() {
    const {authToken} = this.state
    return (
      <View style={styles.container}>
     <Navigator /> 
      {/* <Login authTok={this.auth} /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: '#fff',
  },
});

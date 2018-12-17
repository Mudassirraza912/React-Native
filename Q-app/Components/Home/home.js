import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Are you Company/Waiting for tokens </Text>
        <Button title="Company" onPress={() => this.props.navigation.navigate('Company')}/>
        <Button title="Waiting for Token" onPress={() => {console.log('B')}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
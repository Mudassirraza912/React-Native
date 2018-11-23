import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, Button } from 'react-native';
import { Camera, Permissions, FaceDetector  } from 'expo'
import CustomCamera from './Components/Camera/Facedetecor'
import Quiz from './Components/Quiz/quizes'


export default class App extends React.Component {
  state = {
    camera: true
    
  };
 
  
detectface = () => {
  this.setState({
    camera: false
  })
}



  render() {
    const { camera } = this.state
    return(
      <View  style={{flex: 1}}>
    {camera && <CustomCamera faceDetection={this.detectface} /> }
    {!camera && <Quiz /> }
      </View>
    )
}

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  camera: {

    flex: 1,

    justifyContent: 'space-between',

  },
});

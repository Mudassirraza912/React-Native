import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image,  } from 'react-native';
import { Camera, Permissions, Constants } from 'expo'
// import camerSwitchLogo from '../../assets/78816-200 (1).png'
// import Header from '../Constants/header'

export default class CustomCamera extends React.Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.front,
    faces: [],
  }



  handleFacesDetected = ({ faces }) => {

    if(faces.length>0){
      this.setState({ faces });
      this.props.faceDetection()
    }

  };

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA)
    this.setState({ hasCameraPermission: status === 'granted' })
  }

  renderFaces = () => {
    return (
      <View style={styles.facesContainer} pointerEvents="none">
        {this.state.faces.map(this.renderFace)}
      </View>
    )
  }

  renderFace({ bounds, faceID, rollAngle, yawAngle }) {

    return (
      <View
        key={faceID}
        transform={[
          { perspective: 600 },
          { rotateZ: `${rollAngle.toFixed(0)}deg` },
          { rotateY: `${yawAngle.toFixed(0)}deg` },
        ]}
        style={[
          styles.face,
          {
            ...bounds.size,
            left: bounds.origin.x,
            top: bounds.origin.y,
          },
        ]}>
        <Text style={styles.faceText}>rollAngle: {rollAngle.toFixed(0)}</Text>
        <Text style={styles.faceText}>yawAngle: {yawAngle.toFixed(0)}</Text>
      </View>
    );

  }


  render() {
    const { hasCameraPermission, faces } = this.state
    console.log(faces)
    
    if (hasCameraPermission === null) {
      return <View />
    } else if (hasCameraPermission === false) {
      return <Text>No Access To Camera</Text>
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera
            style={{ flex: 1 }}
             type={this.state.type}
            onFacesDetected={this.handleFacesDetected}
             
          >
            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                flexDirection: 'row',
              }}>
              <TouchableOpacity
                style={{
                  flex: 0.1,
                  alignSelf: 'flex-end',
                  alignItems: 'center',
                }}
                onPress={() => {
                  this.setState({
                    type: this.state.type === Camera.Constants.Type.back
                      ? Camera.Constants.Type.front
                      : Camera.Constants.Type.back,
                  });
                }}>
                <Text
                  style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
                  {' '}Flip{' '}
                </Text>
              </TouchableOpacity>
              {/* <View style={styles.topBar}>
                <Text style={styles.textcolor}>x: {this.state.faces.length ? this.state.faces[0].bounds.origin.x.toFixed(0) : 0}</Text>
                <Text style={styles.textcolor}>y: {this.state.faces.length ? this.state.faces[0].bounds.origin.y.toFixed(0) : 0}</Text>
              </View>

              <View style={styles.bottomBar}>
                <Text style={styles.textcolor}>Heigth: {this.state.faces.length ? this.state.faces[0].bounds.size.height.toFixed(0) : 0}</Text>
                <Text style={styles.textcolor}>width: {this.state.faces.length ? this.state.faces[0].bounds.size.width.toFixed(0) : 0}</Text>
              </View> */}

            </View>
          </Camera>
          {this.state.faces.length ? this.renderFaces() : undefined}
        </View>
      );
    }
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

  topBar: {
    flex: 0.2,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: Constants.statusBarHeight + 1,
  },

  bottomBar: {
    flex: 0.2,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  face: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 1,
    position: 'absolute',
    borderColor: '#808000',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },

  faceText: {
    color: '#32CD32',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
    backgroundColor: 'transparent',
  },

  facesContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    top: 0,
  },

  textcolor: {
    color: '#008080',
  }
});

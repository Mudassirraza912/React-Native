import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Accelerometer,  Permissions, Contacts } from 'expo'

export default class App extends React.Component {

  constructor(){
    super()
    this.state = {
      movement: null,
      jumps: false
    }
  }

  jump = () => {
    this.setState({jumps: !this.state.jumps})
    setTimeout(() => {
      this.setState({jumps: !this.state.jumps})
    },2000)
  }

  componentWillMount() {
    Accelerometer.addListener(item => {
      // console.log(item)
      this.setState({ movement: item.x * -300 })
    })
    this.getCOntacts()
  }

  async getCOntacts() {
    const { status } = await Permissions.askAsync(Permissions.CONTACTS)
    if(status !== 'granted'){
      alert('Hey! You might want to enable notifications for my app, they are good.')
    }

    const { data } = await Contacts.getContactsAsync({
      fields: [
        Contacts.PHONE_NUMBERS,
        Contacts.EMAILS
      ]
    })
    alert('data' + data.length)
    if(data.length > 0){
      const contact = data[0]
      console.log(contact)
    }

  }


  render() {
 
    const { movement, jumps }  = this.state

    return (
      <View style={{flex: 1, top: 100, left: this.state.movement}}>
        {/* <Text>Open up App.js to start working on your app!</Text> */}
        <TouchableOpacity onPress={this.jump}>
          {!jumps ? <Image source={require('./assets/spider.gif')} />
          :
          <Image source={require('./assets/spider-sting.gif')} />}
          
          </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    top: 70,
    
  },
});

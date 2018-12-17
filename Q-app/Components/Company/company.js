import React from 'react'; 
import { StyleSheet, Text, View, Button, TextInput,  } from 'react-native';

export default class Company extends React.Component{   
     constructor() {
         super(); 
         this.state  =  { 
             form:false,
             company:'',
             since:'',
             timing:''

         }
     }
     renderForm() {
        return(
            <View style={{flex: 1}}>
                <View style={{flex: 1, top : 100}}>
                <Text>Your Company name</Text>
         <TextInput
          style={{height: 40,}}
          placeholder="Name of your Company"
          onChangeText={(text) => this.setState({company : text})}
         />
          <Text>Since</Text>
         <TextInput
          style={{height: 40,}}
          placeholder="Since"
          onChangeText={(text) => this.setState({since : text})}
         />
          <Text>Timings</Text>
         <TextInput
          style={{height: 40,}}
          placeholder="Company Timings"
          onChangeText={(text) => this.setState({timing : text})}
         />
         </View>
            </View>
        )
     }
    render() {
        const {form,company,timing,since} = this.state
        console.log(company,since,timing)
        return(
            <View>
            {!form ? <Button title="+" onPress={() => {this.setState({form: true})}}/> : this.renderForm()}
            {/* <Button title="+" onPress={() => {this.setState({form: true})}}/> */}
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
  });
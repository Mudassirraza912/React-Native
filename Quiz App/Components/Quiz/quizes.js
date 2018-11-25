import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Alert, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
// import { Radio ,FormControlLabel} from '@material-ui/core'; 
// import { RadioButton } from 'react-native-material-ui'
import Header from '../Constants/header'
// import RadioGroup from 'react-native-radio-buttons-group';
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button'



export default class Quiz extends React.Component {
    state = {
        startbtn: true,
        quiz: [],
        select:[],
        result: false
    }

    componentWillMount() {
        fetch('https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple')
            .then((res) => res.json())
            .then((respone) => {
                // console.log(respone)9

                this.setState({
                    quiz: respone.results
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }
    selectedOpt(correct, index, value ) {
        const {select} = this.state
        // console.log('index',index, "Value",value,"Correct", correct)
       value == correct && !select.includes(value) && select.push(value)
       this.setState({
        select
       })
    //    console.log('sdaasd',select)
    }

    result = () => {
        const {select, quiz} = this.state
        const selectedOpt = select
        const result = (select.length*100)/(quiz.length)
        this.setState({
            result: result
        })
    }

    renderResult() {
        const {result} = this.state
        return(
            <View>
                <Text>
                    Your result is ==> {result}%
                </Text>
                <Button title='Play Again' onPress={() => {this.setState({startbtn: false, result:false, select:[]})}}/>
            </View>
        )
    }

    renderQuiz() {
        const { quiz, select } = this.state
console.log("Select" , select)
        return (
            <ScrollView >
                {/* <Header /> */}
                {quiz.map((value) => {
                    const incorrectans = value.incorrect_answers 
                    const opt = [value.correct_answer, ...incorrectans]
                return (
                    <View>
                        <Text style={{fontWeight :'bold', marginLeft : '5%'}}>Q:{value.question}</Text>
                        <RadioGroup  onSelect = {this.selectedOpt.bind(this, value.correct_answer)}>
                   { opt.map((val) => {
                        // console.log(val)
                    return (
                           
                                
                            
                                <RadioButton value={val}>
                                <Text>
                                    {val}
                                </Text>
                                </RadioButton>
                           
                        
                

                         
                    )
                })}</RadioGroup>
                </View>
                )
                })}
                <Button title='Submit' onPress={this.result} />
            </ScrollView>
            
        )
    }

    render() {
        const { startbtn, result } = this.state
        return (
            <View style={styles.container}>
                {startbtn && <Button onPress={() => { this.setState({ startbtn: false }) }} title='Start Quiz' />}
                {!startbtn && !result && this.renderQuiz()}
                {!startbtn && result && this.renderResult()}

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
})

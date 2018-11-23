import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Alert, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default class Quiz extends React.Component {
    state = {
        startbtn: true,
        quiz = []
    }

    componentWillMount() {
        fetch('https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple')
        .then((res) => res.json())
        .then((respone) =>{
            console.log(respone)
            this.setState({
                quiz : respone.results
            })
        })
        .catch((err) =>{
            console.log(err)
        })
    }


    renderQuiz() {
        const {quiz} = this.state
        return (
            <View style={styles.container}>
            {quiz.map((value) => {
                return(
                    <ScrollView style={styles.container}>
                        <Text>{value.correct_answer}</Text>
                    </ScrollView>
                )
            })}
            </View>
        )
    }

    render() {
        const {startbtn} = this.state
        return(
            <View style={styles.container}>
                {startbtn && <Button onPress= {() => {this.setState({startbtn : false})}} title='Start Quiz' />
                      
                   }
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
import {TextInput, View, Text, StyleSheet, Alert} from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import {useState} from "react";
import Color from "../constans/color";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

export default function StartGameScreen({onPickNumber}){
  const [enteredNumber, setEnteredNumber] = useState('');

  const numberInputHandler = (enteredText) => {
    setEnteredNumber(enteredText)
  }

  const confirmInputHandler = () => {
    const choseNumber = parseInt(enteredNumber)
    if(isNaN(choseNumber) || choseNumber < 0 || choseNumber > 99){
      Alert.alert('ivalid number!', 'Number has to be a number between 1 and 99.', [{text: 'Okay', style: 'destructive', onPress: resetInputHandler}]);
      return;
    }

    onPickNumber(enteredNumber)
  }

  const resetInputHandler = () => {
    setEnteredNumber('')
  }
  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>
      <Card>
        <InstructionText>Enter a Number</InstructionText>
        <TextInput style={styles.inputNumber} maxLength={2} keyboardType="number-pad" autoCorrect={false} autoCapitalize="none" value={enteredNumber} onChangeText={numberInputHandler}/>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmInputHandler}n>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  rootContainer:{
    flex: 1,
    alignItems:"center",
    marginTop: 100,
  },

  inputNumber:{
    width:40,
    height:50,
    fontSize: 32,
    color:Color.accent500,
    fontWeight: 'bold',
    textAlign:'center',
    borderBottomColor: Color.accent500,
    borderBottomWidth: 2,
    marginVertical: 8,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex:1,
  }
})
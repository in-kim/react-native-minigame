import {View, Text, StyleSheet, Alert, FlatList} from "react-native";
import Title from "../components/ui/Title";
import {useEffect, useState} from "react";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import {Ionicons}from "@expo/vector-icons";
import GuessLogItem from "../components/game/GuessLogItem";

function generateRandomBetween(min, max, exclude){
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude){
    return generateRandomBetween(min, max, exclude);
  }else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;
export default function GameScreen({userNumber, onGameOver}){
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);

  /**
   * @param direction 'lower' or 'greater'
   * */
  function nextGuessHandler(direction) {
    if((direction === 'lower' && currentGuess < userNumber) || (direction === 'greater' && currentGuess > userNumber)){
      Alert.alert("Don't lie!", 'you know that this is wrong...', [{text: 'Sorry!', style: 'cancel'}]);
      return;
    }

    if (direction === 'lower'){
      maxBoundary = currentGuess;
    } else{
      minBoundary = currentGuess;
    }

    const nextNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
    setCurrentGuess(nextNumber);
    setGuessRounds(prevGuessRounds => [nextNumber, ...prevGuessRounds])
  }

  useEffect(() => {
    if (parseInt(currentGuess) === parseInt(userNumber)){
      onGameOver(guessRounds.length)
    }
  },[currentGuess, userNumber, onGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  },[])

  const guessRoundsListLength = guessRounds.length;
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>Higher or lower?</InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this,'lower')}>
              <Ionicons name="md-remove" size={24} color="white"></Ionicons>
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
              <Ionicons name="md-add" size={24} color="white"></Ionicons>
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View style={styles.listContainer}>
        <FlatList
          data={guessRounds}
          keyExtractor={guessRounds => guessRounds}
          renderItem={itemData => (
            <GuessLogItem roundNumber={guessRoundsListLength - itemData.index} guess={itemData.item}/>
          )}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen:{
    flex:1,
    padding: 25,
  },
  instructionText:{
    marginBottom:12.
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex:1,
  },
  listContainer:{
    flex:1,
    padding: 16,
  }
})
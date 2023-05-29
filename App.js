import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import {useFonts} from 'expo-font'
import AppLoading from "expo-app-loading";

import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import {LinearGradient} from "expo-linear-gradient";
import {useState} from "react";
import Color from "./constans/color";
import GameOverScreen from "./screens/GameOverScreen";



export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(false);
  const [guessRounds, setGuessRounds] = useState(0);

  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  })

  if(!fontsLoaded){
    return <AppLoading/>
  }

  const pickedNumberHandler = (pickNumber) => {
    setUserNumber(pickNumber);
  }
  const gameOverHandler = (numberOfRounds) =>{
    setGameIsOver(true);
    setGuessRounds(numberOfRounds);
  }

  const gameResetHandler = () =>{
    setGameIsOver(false);
    setUserNumber(null);
    setGuessRounds(0);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler}/>
  if(userNumber){
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>
  }
  if(gameIsOver){
    screen = <GameOverScreen onGameReset={gameResetHandler} userNumber={userNumber} roundsNumber={guessRounds}/>
  }

  return (
    <LinearGradient colors={[Color.primary700, Color.accent500]} style={styles.rootScreen}>
      <ImageBackground
        source={require('./assets/images/background.png')}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  rootScreen:{
    flex:1
  },
  backgroundImage:{
    opacity:0.25
  }
});

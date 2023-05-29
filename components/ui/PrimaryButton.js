import {Text, View, StyleSheet, Pressable} from "react-native";
import Color from "../../constans/color";

export default function PrimaryButton({ children, onPress }) {
  const pressHandler = () => {
    onPress();
    console.log('pressed!!');
  }
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable style={({pressed}) => pressed ? [styles.pressed, styles.buttonInnerContainer]: styles.buttonInnerContainer} onPress={pressHandler} android_ripple={{color: Color.primary600}}>
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonOuterContainer:{
    borderRadius: 28,
    margin:4,
    overflow:'hidden',
  },
  buttonInnerContainer:{
    backgroundColor:Color.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color:'#fff',
    textAlign: 'center'
  },
  pressed:{
    opacity: 0.75
  }
})
import {View, StyleSheet} from "react-native";
import Color from "../../constans/color";

export default function Card({children}){
  return (
    <View style={styles.inputContainer}>{children}</View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: 'center',
    marginTop: 20,
    padding: 16,
    marginHorizontal: 25,
    backgroundColor: Color.primary800,
    borderRadius: 10,
    // 그림자 (android)
    elevation: 4,
    // 그림자 (ios)
    shadowColor: 'black',
    shadowRadius: 6,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25
  },
})
import {View, Text, StyleSheet} from "react-native";
import Color from "../../constans/color";

export default  function NumberContainer({children}){
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    borderWidth: 4,
    borderColor: Color.accent500,
    padding: 24,
    margin: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberText:{
    fontFamily: 'open-sans-bold',
    color:Color.accent500,
    fontSize:36,

  }
})
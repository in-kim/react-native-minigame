import {View, Text, StyleSheet, Permission } from "react-native";
import Color from "../../constans/color";
import {fn} from '../../assets/util/common'

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
    padding: fn.accordingDeviceSize(12, 24),
    margin: fn.accordingDeviceSize(12, 24),
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberText:{
    fontFamily: 'open-sans-bold',
    color:Color.accent500,
    fontSize: fn.accordingDeviceSize(28, 36),

  }
})
import { StyleSheet, Text, TouchableOpacity, View, Image, TextInput, Keyboard } from "react-native";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount, reset } from "../features/beersSlice";


const Homer = () => {
  const [amountToAdd, setAmountToAdd] = useState("")

  const beers = useSelector(state => state.beersReducer.beers)

  dispatch = useDispatch()

  const handleReset = () => {
    dispatch(reset())
    setAmountToAdd(0)
  }


  return (
    <View style={styles.container}>

      <View style={styles.resultContainer}>
        <Text style={{ ...styles.xlText, ...styles.simpsonFont }}>Homer's beers: {beers}</Text>
      </View>

      <View style={styles.unitContainer}>
        <TouchableOpacity style={styles.btn} onPress={() => dispatch(decrement())}>
          <Text style={{ ...styles.xlText, ...styles.simpsonFont }}>-</Text>
        </TouchableOpacity>
        <Text style={{ ...styles.xlText, ...styles.simpsonFont, ...styles.whiteText }}>{beers}</Text>
        <TouchableOpacity style={styles.btn} onPress={() => dispatch(increment())}>
          <Text style={{ ...styles.xlText, ...styles.simpsonFont }}>+</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.amountContainer}>
        <TextInput
          style={styles.TextInput}
          placeholder="Wanna..."
          inputMode="numeric"
          keyboardType="numeric"
          value={amountToAdd.toString()}
          onChangeText={number => setAmountToAdd(Number(number))}
        />
        <TouchableOpacity onPress={() => dispatch(incrementByAmount(amountToAdd))}>
          <Text style={{ ...styles.xlText, ...styles.simpsonFont, ...styles.whiteText }}>Add</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.resetContainer}>
        <TouchableOpacity onPress={() => handleReset()}>
          <Text style={{ ...styles.xlText, ...styles.simpsonFont, ...styles.btnReset, ...styles.whiteText }}>I better go home!</Text>
        </TouchableOpacity>
      </View>
      <Image
        source={{ uri: "https://pngimg.es/d/simpsons_PNG46.png" }}
        resizeMode="contain"
        style={styles.image}
      />
    </View>
  )
}

export default Homer

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: '#1465bb',
  },
  simpsonFont: {
    fontFamily: 'simpson-font',
  },
  xlText: {
    fontSize: 24,
  },
  whiteText: {
    color: "#fff"
  },
  image: {
    width: 150,
    height: 150,
  },
  unitContainer: {
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
    gap: 15,

  },
  resultContainer: {
    backgroundColor: "#ffd90f",
    padding: 30,
    borderRadius: 15,
  },
  btn: {
    padding: 15,
    backgroundColor: "#ffd90f",
    borderRadius: 10,
  },
  amountContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  TextInput: {
    borderColor: "whitesmoke",
    borderRadius: 15,
    borderWidth: 1,
    padding: 10,
    marginRight: 10,
    fontFamily: "simpson-font",
    fontSize: 20,
    color: "whitesmoke",
    textAlign: "center",
  },
  btnReset: {
    padding: 15,
    backgroundColor: "#F14E28",
    borderRadius: 10,
  },
  resetContainer: {
    marginTop: 20,
  }
}) 
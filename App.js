import { StatusBar } from 'expo-status-bar'; //as is
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native'; // as is
import { useState } from 'react'; // my import
import React from 'react'; // my import


export default function App() {

  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)
  const [result, setResult] = useState(0);


  //lista toimii kiintealla esimerkilla
  const [data, setData] = useState([]);

  const addElement = () => {
    var newArray
  }

  const plus = () => {
    var summa = Number(num1) + Number(num2);
    setResult(summa);
    var str  = (num1 + " + " + num2 + " = " + summa);
    setData([...data, {key: str}]);
  }

  const minus = () => {
    var erotus = Number(num1) - Number(num2);
    setResult(erotus);
    var str = (num1 + " - " + num2 + " = " + erotus);
    setData([...data, {key: str}])
  }

  const input1Changed = (event) => {
    setNum1(event.target.value);
  }

  const input2Changed = (event) => {
    setNum2(event.target.value);
  }


  return (
    <View style={styles.container}>
      
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>

      <Text>Result: {result}</Text>

      <TextInput
        style={styles.input}
        onChangeText={setNum1}
        value={num1}
        keyboardType="numeric" />

      <TextInput
        style={styles.input}
        onChangeText={setNum2}
        value={num2}
        keyboardType="numeric" />

      <View style={styles.row}>

        <Button
            style={styles.button}
            title="+"
            color="#f194ff"
            onPress={plus} />

        <Button
            style={styles.button}
            title="-"
            color="#f194ff"
            onPress={minus} />
      </View>

      <Text></Text>
      <Text></Text>
      <Text>History</Text>
      <FlatList 
        data={data}
        renderItem={({item}) => (
          <Text>{item.key}</Text>
        )
        }
      />


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  //my styles below
  input: {
    height: 30,
    width: 150,
    margin: 5,
    borderWidth: 2,
    padding: 5,
  },
  button: {
    height: 20,
    width: 20,
    justifyContent: "center",
    padding: 150,
  },
  row: {
    flexDirection: "row",
  }

});

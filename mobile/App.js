import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableHighlight as Button,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3185FC',
  },
  title: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  counter: {
    color: '#fff',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 50,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  button: {
    backgroundColor: '#000',
    padding: 20,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 15,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

function App() {
  const [counter, setCounter] = useState(0);

  function handleIncrement() {
    setCounter(counter + 1);
  }
  function handleDecrement() {
    setCounter(counter - 1);
  }

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>
          O que se pode fazer com javascript hoje em dia
        </Text>
        <Text style={styles.counter}>{counter}</Text>
        <View style={styles.buttonsContainer}>
          <Button onPress={handleDecrement} style={styles.button}>
            <Text style={styles.buttonText}>Decrementar</Text>
          </Button>
          <Button onPress={handleIncrement} style={styles.button}>
            <Text style={styles.buttonText}>Incrementar</Text>
          </Button>
        </View>
      </SafeAreaView>
    </>
  );
}

export default App;

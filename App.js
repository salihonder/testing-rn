// Imports
import React from 'react';
import { Text, StyleSheet, SafeAreaView } from 'react-native';

// Components


// Screens

// App
const App = () => {


  return (
    <SafeAreaView style={Styles.container}>
      <Text style={Styles.header}>TEST APP</Text>
    </SafeAreaView>
  );
}

// Style
const Styles = StyleSheet.create({
  container: {

    flex: 1,
    backgroundColor: "rgba(74, 66, 66, 0.75)",
    paddingHorizontal: 24
  },
  button: {
    height: 60,
    backgroundColor: 'blue',
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default App;
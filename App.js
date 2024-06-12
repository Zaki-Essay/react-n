import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {

  const [counter, setCounter] = useState(0);

  const hundleOnpress = ()=>{
      setCounter(counter+1)
  }
  return (
    <View style={styles.container}>
      <Text>counter {counter}</Text>
      <Button title='Test button' onPress={hundleOnpress} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

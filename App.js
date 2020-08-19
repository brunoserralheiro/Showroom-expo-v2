import { StatusBar } from 'expo-status-bar';
import React , {useState}from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
const [outputText, setOutputText] = useState('Old text !!!');
const changeTextButton = 'Change Text';

  return (
    
    <View style={styles.container}>
      <Text>{outputText}</Text>
      <Button title={changeTextButton} 
              onPress={()=> setOutputText('Text Magically changes!!!')}   
              color='blue' 
              disabled={false} 
              />
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
    borderColor : '#f0f'
  },
});

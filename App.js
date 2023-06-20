import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , ScrollView } from 'react-native';

import { Card } from './Card';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <StatusBar 
        backgroundColor="white"
      />
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e7eaf6',
    // padding:20,
    // overflow:"auto",
  },
});

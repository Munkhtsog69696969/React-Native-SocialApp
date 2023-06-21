import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , ScrollView } from 'react-native';

import { Card } from './Card';
import { CreatePost } from './CreatePost';
import { Navbar } from './Navbar';
import { DataProvider } from './context/DataProvider';
import { DataContext } from './context/DataProvider';
import { useContext } from 'react';

export default function App() {
  return (
    <DataProvider>
      <View style={styles.container}>
        <StatusBar 
            backgroundColor="white"
          />
        <ScrollView>
          <Navbar></Navbar>
          <Card></Card> 
        </ScrollView>

        <CreatePost></CreatePost>
      </View>
    </DataProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e7eaf6',
    // position:"relative",
  },
});

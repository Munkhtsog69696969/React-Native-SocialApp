import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , ScrollView } from 'react-native';

import { Card } from './Card';
import { CreatePost } from './CreatePost';
import { Navbar } from './Navbar';
import { DataProvider } from './context/DataProvider';
import { DataContext } from './context/DataProvider';
import { useContext, useEffect, useState } from 'react';

import { axiosBaseUrl } from './common/axios';

export default function App() {
  const [posts,setPosts]=useState([]);

  useEffect(()=>{
    axiosBaseUrl.get("/")
      .then(async(res)=>{
        console.log(res.data);
        setPosts(res.data.posts)
      }).catch((err)=>{
        console.log(err)
      })
  },[]);

  return (
    <DataProvider>
      <View style={styles.container}>
        <StatusBar 
            backgroundColor="white"
          />
        <ScrollView>
          <Navbar></Navbar>
          {/* <Card></Card>  */}
          {
            posts && posts.map((post,i)=>{
              return(
                <Card key={i} post={post}></Card>
              )
            })
          }
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

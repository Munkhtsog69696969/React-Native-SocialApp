import { StyleSheet, Button, Text, View , Image , TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { DataContext } from './context/DataProvider';
import { useContext } from 'react';

export const Navbar=()=>{
    const {createPost,setCreatePost}=useContext(DataContext);

    const Create=()=>{
        setCreatePost(prev=>!prev);
    }

    const Google=()=>{
        window.open("http://localhost:3001/auth/google" , "_self")
    }

    return(
        <View style={styles.container}>
            <Button onPress={Google} title='Sign up with Google'/>
            <AntDesign onPress={Create} name="pluscircleo" style={styles.icon} />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#ff5722",
        height:100,
        position:"relative",
        display:"flex",
        alignItems:"center",
        flexDirection:"row"
    },
    icon:{
        fontSize:30,
        position:"absolute",
        right:30,
        color:"white"
    }
});
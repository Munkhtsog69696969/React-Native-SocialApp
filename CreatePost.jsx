import { StyleSheet, Text, View , Image , TouchableOpacity } from 'react-native';
import { DataContext } from './context/DataProvider';
import { useContext } from 'react';

export const CreatePost=()=>{
    const {createPost,setCreatePost}=useContext(DataContext);

    return(

        createPost ?

        <View style={styles.container}>
            <View style={styles.whiteBox}>

            </View>
        </View>

        :

        <View></View>
    )
}

const styles = StyleSheet.create({
    container:{
        width:"100vw",
        height:"100vh",
        position:"fixed",
        backgroundColor:"rgba(0,0,0,0.5)",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
    },
    whiteBox:{
        width:600,
        height:400,
        backgroundColor:"rgba(255,255,255,1)",
        borderRadius:20,
    }
});
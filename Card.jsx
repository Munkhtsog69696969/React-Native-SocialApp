import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image , TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';

const profileImg=require("./assets/profile.jpeg")

export const Card=()=>{
    const Click=()=>{
        // alert("clicked")
        console.log("1")
    }

    return(
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image style={styles.profileImg} source={profileImg}/>
                <View style={styles.desc}>
                    <View style={styles.nameCont}>
                        <Text style={styles.name}>John Samith</Text>
                    </View>
                    <View style={styles.nameCont}>
                        <Text style={styles.date}>6 minutes ago</Text>
                    </View>
                </View>
                <View style={styles.hamburgerCont}>
                    <TouchableOpacity style={styles.icon}>  
                        <Entypo onPress={Click} name="dots-three-vertical" size={20} color="grey" />
                    </TouchableOpacity>
                </View>
            </View>
            <Text style={styles.text}>Good morning!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:"white",
        height:160,
        // borderRadius:"30px",
        padding:20,
        marginBottom:10,
        position:"relative"
    },
    profile:{
        display:"flex",
        // border:"1px solid red",
        height:80,
        alignItems:"center",
        // justifyContent:"center",
        flexDirection:"row"
    },
    profileImg:{
        width:50,
        height:50,
        borderRadius:10
    },
    desc:{
        // border:"1px solid red",
        height:50,
        width:200,
        display:"flex",
        paddingHorizontal:10
    },
    nameCont:{
        // border:"1px solid red",
        height:"50%",
        flex:1,
        justifyContent:"center"
    },
    name:{
        fontSize:14,
        fontWeight:"400"
    },
    date:{
        fontSize:14,
        color:"grey"
    },
    hamburgerCont:{
        // border:"1px solid blue",
        height:80,
        width:60,
        // flex:1,
        justifyContent:"center",
        alignItems:"center",
        position:"absolute",
        right:10
    },
    text:{
        fontSize:20,
        marginVertical:10
    },
    // icon:{
    //    color:"red"
    // }
});
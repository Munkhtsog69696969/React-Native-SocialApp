import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button, View , Image , TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { useState } from 'react';
import { axiosBaseUrl } from './common/axios';

const profileImg=require("./assets/profile.jpeg")

export const Card=({post})=>{
    const [showDropdown,setShowDropdown]=useState(false);
    const [update,setUpdate]=useState(false);
    const [newText,setNewText]=useState();

    const Click=()=>{
       setShowDropdown(prev=>!prev);
    }

    const Delete=(id)=>{
        console.log(id)
        axiosBaseUrl.delete(`/${id}`)
            .then(async(res)=>{
                console.log(res.data);
                window.location.reload();
            }).catch((err)=>{
                console.log(err)
            })
    }

    const toggleUpdate=()=>{
        setUpdate(true)
    }

    const Update=async(id)=>{
        await axiosBaseUrl.put(`/${id}`,{newText:newText})
            .then(async(res)=>{
                console.log(res.data);
                window.location.reload();
            }).catch((err)=>{
                console.log(err)
            })
    }

    return(
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image style={styles.profileImg} source={profileImg}/>
                <View style={styles.desc}>
                    <View style={styles.nameCont}>
                        <Text style={styles.name}>{post.creator}</Text>
                    </View>
                    <View style={styles.nameCont}>
                        <Text style={styles.date}>{post.createdAt}</Text>
                    </View>
                </View>
                <View style={styles.hamburgerCont}>
                    <TouchableOpacity style={styles.icon}>  
                        <Entypo onPress={Click} name="dots-three-vertical" size={20} color="grey" />
                        {
                            showDropdown ?

                            <View style={styles.dropdown}>
                                <Button onPress={()=>Delete(post._id)} title='Delete'></Button>
                                <Button onPress={toggleUpdate} title='Update'></Button>
                            </View>

                            :

                            ""
                        },
                        {
                            update ?

                            <View style={styles.updateDropdown}>
                                <input value={newText} onChange={(e)=>{setNewText(e.target.value)}}/>
                                <Button onPress={()=>{Update(post._id)}} title='Update'></Button>
                            </View>

                            :

                            ""
                        }
                    </TouchableOpacity>
                </View>
            </View>
            <Text style={styles.text}>{post.text}</Text>
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
    icon:{
    //    color:"red"
        // border:"1px solid red",
        position:"absolute",
    },
    dropdown:{
        border:"1px solid grey",
        position:"absolute",
        width:100,
        height:100,
        right:30,
        borderRadius:10
    },
    updateDropdown:{
        border:"1px solid grey",
        position:"absolute",
        width:500,
        height:100,
        right:150,
        borderRadius:10
    }
});
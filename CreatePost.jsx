import { StyleSheet, Text, View , Image , TouchableOpacity, Button } from 'react-native';
import { DataContext } from './context/DataProvider';
import { useContext, useState } from 'react';
import { axiosBaseUrl } from './common/axios';
import { Entypo } from '@expo/vector-icons';

export const CreatePost=()=>{
    const {createPost,setCreatePost}=useContext(DataContext);
    const [input,setInput]=useState();
    const [image,setImage]=useState();

    const Close=()=>{
        setCreatePost(false);
    }

    const Create=()=>{
        axiosBaseUrl.post("/", {text:input , imageUrl:image})
            .then(async(res)=>{
                console.log(res.data);
                setInput("");
                setCreatePost(false);
            }).catch((err)=>{
                console.log(err)
            })
    }

    function uploadPostImage(event){
        var reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = () => {
            // console.log(reader.result)
            setImage(reader.result)
        };
        reader.onerror = (error) => {
          console.log("upload image error:", error);
        };
    }
    

    return(
        createPost ?

        <View style={styles.container}>
            <View style={styles.whiteBox}>
                <View>
                    {/* <TouchableOpacity onPress={Close}> */}
                        <Entypo onPress={Close} name="circle-with-cross" size={50} color="black" />
                    {/* </TouchableOpacity> */}
                </View>
                <View style={styles.create}>
                    <Text>
                        Enter Text
                    </Text>
                    <input value={input} onChange={(e)=>{setInput(e.target.value)}}/>
                    <input onChange={uploadPostImage} type="file"/>
                    {
                        image ? 

                        <Image style={styles.image} source={image}/>

                        :
                        
                        ""
                    }
                    <Button onPress={Create} title='Create'></Button>
                </View>
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
    },
    create:{
        // border:"1px solid red",
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    image:{
        width:200,
        height:200,
        resizeMode:"cover"
    }
});
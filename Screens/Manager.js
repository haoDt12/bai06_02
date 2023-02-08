import { View, Text, Button, StyleSheet, Image, FlatList } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";


const Manager = (props) => {
    const route = props.route

    const list = route.params.data
    return (
        <View style={styles.container}>
            <FlatList
                data={list}
                renderItem={({item})=> <View style={styles.container}>
                    <Image style={styles.img} source={{uri:'https://img4.thuthuatphanmem.vn/uploads/2020/05/16/anh-anime-nu-toc-trang-ngau_043845747.jpg'}} />
                    <View style={styles.infor}>
                    <Text >{item.name}</Text>
                    <Text>{item.msv}</Text>
                    </View>
                </View>  }
                keyExtractor={(item)=>item.id}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        borderWidth: 1,
        borderRadius: 20,
        flexDirection:"row",
        justifyContent :"center",
        alignItems :"center",
        margin: 10,
        padding: 20,
        borderColor: "red"
        
    },
    img: {
        width: 90, height: 90 ,borderRadius: 100, backgroundColor: "grey", justifyContent: "center", alignSelf:'center'
    },
    infor:{
       alignItems:"flex-start",
       justifyContent:"space-evenly",
       marginLeft: 5

    }
})
export default Manager;
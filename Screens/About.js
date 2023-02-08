import { View, Text, Button, StyleSheet, Image } from "react-native";


const About = (props) => {
    const route = props.route;
    const list = route.params.infor;
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Họ và tên: {list.name}</Text>
            <Text style={styles.text}>Lớp: {list.class}</Text>
            <Text style={styles.text}>MSV: {list.msv}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center"
    },
    text:{
        fontWeight:"bold",
        fontSize: 18
    }

})
export default About;
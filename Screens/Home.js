import { View, Text, Button, StyleSheet, Image } from "react-native";
const Home = (props) => {
    const nav = props.navigation;
    const list = [
        {
            id: 1,
            name: 'Nguyễn Văn A',
            msv: 'PH27522'
        },
        {
            id: 2,
            name: 'Nguyễn Văn B',
            msv: 'PH27523'
        },
        {
            id: 3,
            name: 'Nguyễn Văn C',
            msv: 'PH27525'
        },
    ]
    const listAbout = {
        name: "Đinh Trọng Hào",
        class: "CP17301",
        msv: "PH27524"
    }
    return (
        <View style={styles.container}>
            <Image
            style={{ width: 90, height: 90 ,borderRadius: 100, backgroundColor: "grey", justifyContent: "center", alignSelf:'center'}}
                source={{ uri: 'https://img4.thuthuatphanmem.vn/uploads/2020/05/16/anh-anime-nu-toc-trang-ngau_043845747.jpg' }} />
            <View style={styles.btn}>
                <Button title="Manager" onPress={() => nav.navigate('Manager', { data: list })} />
                <Button title="About" onPress={() => nav.navigate('About', { infor: listAbout })} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center"
    },
    btn: {
        flexDirection: "row",

    }
})
export default Home;
import { useTheme } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, TextInput, StatusBar, Image } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import Ionicons from 'react-native-vector-icons/Ionicons';

const AVATAR_URL = 'https://plus.unsplash.com/premium_photo-1682124715390-87d89779f3ad?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';


const CreateTableScreen = () => {
    const {colors}  = useTheme();
    return (
        <View style={styles.container}>
            <View style={styles.description}>
                <Text style={styles.descriptionText}>
                    Tên Bảng
                </Text>
            </View>
            <View style={styles.content}>
                <TextInput
                    style={styles.input}
                    placeholder="Đặt tiêu đề cho bảng của bạn"
                />
            </View>  
            <View style={styles.listUser}>
                <Text style={styles.listUserTitle}>Cộng tác viên</Text>
                <View style={styles.listUserContent}>
                    <Image
                        source={{ uri: AVATAR_URL }}
                        style={styles.listUserImage}
                        resizeMode="cover"
                    />
                    <View style={{flex:1}}>
                        <Text style={[styles.username, {colors: colors.text}]} numberOfLines={1}>KaiO</Text>
                        <Text style={[styles.usernameId, {colors: colors.text,}]}> @kaio</Text>
                    </View>
                    <TouchableOpacity
                        style={[styles.listUserButton, {backgroundColor: colors.border, colors: colors.text}]}>
                            <Text style={styles.listUserButtonText}>Thêm</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.listUserContent}>
                    <Image
                        source={{ uri: AVATAR_URL }}
                        style={styles.listUserImage}
                        resizeMode="cover"
                    />
                    <View style={{flex:1}}>
                        <Text style={[styles.username, {colors: colors.text}]} numberOfLines={1}>KaiO</Text>
                        <Text style={[styles.usernameId, {colors: colors.text,}]}> @kaio</Text>
                    </View>
                    <TouchableOpacity
                        style={[styles.listUserButton, {backgroundColor: colors.border, colors: colors.text}]}>
                            <Text style={styles.listUserButtonText}>Thêm</Text>
                    </TouchableOpacity>
                </View>

                {/* // Mời bạn bè */}
                <View style={styles.listUserContent}>
                    <TouchableOpacity
                        style={[styles.listUserButton, {backgroundColor: colors.border, colors: colors.text}]}>
                            <Ionicons name="person-add-sharp" size={22} color={colors.text} />
                    </TouchableOpacity>
                    <Text style={{color: colors.text, fontSize:20}}>Mời bạn bè</Text>
                </View>

                
            </View>          
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
    },
    header: {
        width: '100%',
        alignItems: 'center',
    },
    content: {
        width: '100%',
        paddingHorizontal: 20,
    },
    title: {
        textAlign: 'left',
    },
    input: {
        width: '100%',
        borderColor: '#ccc',
        borderBottomWidth: 1,
        paddingHorizontal: 10,
        height: 50,
        fontSize: 20,
        width: '100%',
    },
    description:{
        textAlign:'left'
    },
    descriptionText:{
        paddingHorizontal: 10,
        // height: 50,
        marginTop: 10,
        fontSize: 20,
        lineHeight: 30,
        // fontWeight:'bold'
    },
    listUser:{
        flex:1,
        marginTop: 30,
    },
    listUserTitle:{
        fontSize: 20,
        paddingLeft:20,
    }, 
    listUserContent:{
        paddingHorizontal:24,
        flexDirection:'row',
        alignItems:'center',
        gap:8,
        paddingBottom: 5,
    }, 
    listUserImage:{
        // flex:1,
        width: 50,
        aspectRatio:1, 
        borderRadius:50
    }, 
    username:{
        fontSize:18,
        fontWeight: "660",
        marginBottom:8,
    },
    usernameId:{
        opacity:0.4
    },
    listUserButton: {
        width:45,
        aspectRatio:1,
        alignItems: "center",
        justifyContent:"center",
        borderRadius: 52,
    }
});

export default CreateTableScreen;
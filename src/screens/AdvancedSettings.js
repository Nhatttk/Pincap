// AdvancedSettingsScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Switch } from 'react-native-gesture-handler';

const AdvancedSettingsScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Cài đặt tương tác</Text>
                <View style={styles.att}>
                    <Text style={styles.textTitle}>Cho phép nhận xét</Text>
                    <Switch />
                </View>
            </View>
            <View style={styles.content}>
                <Text style={styles.title}>Đề xuất mua sắm</Text>
                <View style={styles.att}>
                    <Text style={styles.textTitle}>Hiển thị các sản phẩm tương tự</Text>
                    <Switch />
                </View>
            </View>
            <View style={styles.description}>
                <Text style={styles.textDescription}>
                    Mọi người có thể mua sắm các sản phẩm tương tự trong Ghim này bằng cách tìm kiếm trực quan.
                </Text>
            </View>
            <View style={styles.description}>
                <Text style={styles.textDescription}>
                    Đề xuất mua sắm không có sẵn cho các Ghim có nhãn quan hệ đối tác trả phí hoặc sản phẩm được gắn thẻ.
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'center',
    },
    content:{
        width: '100%',
        marginVertical: 14,
    },
    title:{
        textAlign:'left', 
        fontWeight: 'bold',
        paddingHorizontal: 10,
    }, 
    att: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 20,
    },
    textTitle:{
        fontSize: 20, // Kích thước chữ
        textAlign: 'center', // Canh giữa văn bản
        lineHeight: 35,
        fontWeight: 'bold'
    },
    description: {
        paddingHorizontal: 10,
        marginVertical: 14,
    },
    textDescription: {
        textAlign: 'left',
        fontSize: 17,
    }
});

export default AdvancedSettingsScreen;

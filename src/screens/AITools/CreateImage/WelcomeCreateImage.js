import React, { useEffect, useState } from "react";
import {
    StyleSheet,
    View,
    Text,
    Image,
    StatusBar,
    Pressable,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";

import { useNavigation } from "@react-navigation/native";
import { theme } from "../../../constants/theme";
import { hp, wp } from "../../../helpers/common";

const TypingEffect = ({ text, speed }) => {
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
        let index = 0;
        const intervalId = setInterval(() => {
            setDisplayedText((prev) => prev + text.charAt(index));
            index++;
            if (index === text.length) {
                clearInterval(intervalId);
            }
        }, speed);

        return () => clearInterval(intervalId);
    }, [text, speed]);

    return (
        <Text style={styles.typingText}>
            {displayedText}
        </Text>
    );
};

const WelcomeCreateImage = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <StatusBar entering={FadeInUp.duration(600)} style="light" />
            <Animated.Image
                source={require("../../../assets/ai-welcome.jpg")}
                style={styles.bgImage}
                resizeMode="cover"
            />
            <Animated.View entering={FadeInDown.duration(1000)} style={{ flex: 1 }}>
                <LinearGradient
                    colors={[
                        "rgba(255,255,255,0)",
                        "rgba(255,255,255,0)",
                        "white",
                        "white",
                    ]}
                    style={styles.gradient}
                    start={{ x: 1.3, y: 0.5 }}
                    end={{ x: 0.3, y: 0.8 }}

                />
                <View style={styles.titleContainer}>
                    <Animated.Text
                        entering={FadeInDown.delay(400).springify()}
                        style={styles.title}
                    >
                        Tạo hình ảnh tuyệt đẹp từ các gợi ý đơn giản
                    </Animated.Text>
                </View>
                <View style={styles.contentContainer}>
                    <Animated.Text
                        entering={FadeInDown.delay(500).springify()}
                        style={styles.punchLine}
                    >
                        <TypingEffect
                            text="Tôi muốn tạo ảnh sương mù mờ nhân ảo, sự giao thoa giữa ánh sáng mặt trời và một cô gái nóng bỏng!"
                            speed={50} />
                    </Animated.Text>
                </View>
                <View style={styles.btnCreate}>
                    <Animated.View entering={FadeInDown.delay(600).springify()}>
                        <Pressable
                            onPress={() => navigation.navigate("CreateImageAI")}
                            style={styles.startButton}
                        >
                            <Image
                                source={require("../../../assets/btn_create.png")}
                                style={{ width: 20, height: 20 }}
                            />
                            <Text style={styles.startText}>Bắt đầu</Text>
                        </Pressable>
                    </Animated.View>
                </View>
            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: "relative"
    },
    bgImage: {
        width: wp(100),
        height: hp(50),
        position: "absolute",
    },
    gradient: {
        width: wp(100),
        height: hp(100),
        bottom: 0,
        position: "absolute",
    },
    titleContainer: {
        position: "absolute",
        top: "35%",
        left: "7%",
        width: "55%",
    },
    title: {
        fontSize: hp(2.8),
        color: theme.colors.neutral(0.8),
        fontWeight: theme.frontWeights.bold,
    },
    contentContainer: {
        position: "absolute",
        top: "51%",
        left: 17,
        marginLeft: "auto",
        marginRight: "auto",
        width: "91%",
        height: "36%",
        paddingHorizontal: 20,
        borderRadius: 15,
        backgroundColor: 'rgba(230, 230, 230, 0.5)',
        alignItems: "center",
    },
    punchLine: {
        fontSize: hp(1.2),
        fontWeight: theme.frontWeights.medium,
        color: theme.colors.neutral(0.9),
        marginTop: 15,
        letterSpacing: 1,
    },
    btnCreate: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        marginBottom: 50,
    },
    startButton: {
        flexDirection: "row",
        gap: 10,
        backgroundColor: theme.colors.neutral(0.9),
        padding: 12,
        paddingHorizontal: "32%",
        borderRadius: theme.radius.xs,
        borderCurve: "continuous",
    },
    startText: {
        color: theme.colors.white,
        fontSize: hp(2),
        fontWeight: theme.frontWeights.medium,
        letterSpacing: 1,
    },
});

export default WelcomeCreateImage;

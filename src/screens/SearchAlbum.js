import * as React from 'react';
import { View, StatusBar, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

function GhimScreen() {
  return (
    <View style={styles.screen}>
      {/* Nội dung của GhimScreen */}
    </View>
  );
}

function BangScreen() {
  return (
    <View style={styles.screen}>
      {/* Nội dung của BangScreen */}
    </View>
  );
}

function AvatarButton({ navigation }) {
  return (
    <TouchableOpacity
      style={styles.avatarButton}
      onPress={() => navigation.navigate('Avatar')}
    >
      {/* Icon hoặc hình ảnh của Avatar */}
      <Image source={require('../assets/images/1.png')} style={styles.avatarImage} />
    </TouchableOpacity>
  );
}

function SettingButton({ navigation }) {
  return (
    <TouchableOpacity
      style={styles.settingButton}
      onPress={() => navigation.navigate('Setting')}
    >
      {/* Icon hoặc hình ảnh của Setting */}
      <Image source={require('../assets/images/1.png')} style={styles.settingImage} />
    </TouchableOpacity>
  );
}

const { width } = Dimensions.get('window');
const tabWidth = 100; // Chiều rộng của tab view

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10, // Khoảng cách giữa các phần tử
  },
  avatarButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarImage: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  settingButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  settingImage: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <AvatarButton />
      <Tab.Navigator tabBarOptions={{ tabStyle: { width: tabWidth } }}>
        <Tab.Screen name="Ghim" component={GhimScreen} />
        <Tab.Screen name="Bảng" component={BangScreen} />
      </Tab.Navigator>
      <SettingButton />
    </View>
  );
}

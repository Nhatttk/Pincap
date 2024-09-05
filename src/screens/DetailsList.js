// import * as React from 'react';
// import { 
//   View, 
//   StatusBar, 
//   StyleSheet, 
//   Dimensions, 
//   Pressable,
//   Text,
//   Image 
// } from 'react-native';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import { useNavigation } from "@react-navigation/native";
// import { useLayoutEffect } from "react";

// const Tab = createMaterialTopTabNavigator();

// function GhimScreen() {
//   return (
//     <View style={styles.screen}>
//       <Text>Nội dung của GhimScreen</Text>
//     </View>
//   );
// }

// function BangScreen() {
//   return (
//     <View style={styles.screen}>
//       <Text>Nội dung của BangScreen</Text>
//     </View>
//   );
// }

// const { width } = Dimensions.get('window');
// const tabWidth = 200; 
// const totalTabWidth = tabWidth * 2; 
// const remainingWidth = width - totalTabWidth; 
// const sidePadding = remainingWidth / 2;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: StatusBar.currentHeight,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#fff'
//   },
//   screen: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//   },
//   tabBar: {
//     width: totalTabWidth,
//     alignSelf: 'center',
//   },
// });

// export default function AlbumScreen() {
//   const navigation = useNavigation();

//   useLayoutEffect(() => {
//     navigation.setOptions({
//       headerLeft: () => (
//         <Pressable onPress={() => navigation.openDrawer()}>
//           <Image
//             source={require("../assets/images/1.png")}
//             style={{ width: 40, height: 40, borderRadius: 20, marginLeft: 15 }} 
//           />
//         </Pressable>
//       ),
//     });
//   }, [navigation]); 

//   return (
//     <View style={styles.container}>
//       <Tab.Navigator
//         screenOptions={{
//           tabBarItemStyle: { width: tabWidth },
//           tabBarStyle: { width: totalTabWidth, alignSelf: 'center' },
//         }}
//       >
//         <Tab.Screen name="Ghim" component={GhimScreen} />
//         <Tab.Screen name="Bảng" component={BangScreen} />
//       </Tab.Navigator>
//     </View>
//   );
// }
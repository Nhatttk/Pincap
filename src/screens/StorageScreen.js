// import * as React from 'react';
// import { Button, Text, View } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// function StorageScreen({navigation}){
//     return (
//         <View>
//             <Button 
//              title="Store Data"
//              onPress={()=>{
//                 storeData('myName', 'KaiO');
//              }}
//             />
//             <Button 
//              title="Get Data"
//              onPress={()=>{
//                 getData('myName');
//              }}
//             />
//         </View>
//     )
// }

// const storeData = async (key, value)=> {
//     try{
//         await AsyncStorage.setItem(key, value);
//         console.log('Data is stored sucessfully');
//     }catch (error){
//         console.log(error)
//     }
// }

// const getData = async (key) => {
//     try{
//         const value = await AsyncStorage.getItem(key);
//         console.log('Data is: ',value);
//     }catch (error){
//         console.log(error);
//     }
// }

// export default StorageScreen;
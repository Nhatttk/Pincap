import React from "react";
import { View, FlatList, Text, ImageBackground } from "react-native";
import styles from "../../assets/styles/SearchStyles";

const cardList = ({ data }) => {
  return (
    <View>
      <Text style={styles.titleText}>Ideas for you</Text>
      <FlatList
        numColumns={2}
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <ImageBackground
              source={{uri: item.medias[0].mediaURL}}
              style={styles.imageBackground}
            >
              <Text style={styles.title}>{item.tagName}</Text>
            </ImageBackground>
          </View>
        )}
      />
    </View>
  );
};

export default cardList

import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { MasonryFlashList } from "@shopify/flash-list";
import ImageCard from './imageCard';
import { wp } from '../helpers/common';

const ImageGrid = ({ images }) => {
  return (
    <View style={styles.container}>
      <MasonryFlashList
        data={images}
        numColumns={2}
        initialNumToRender={1000}
        contentContainerStyle={styles.listContainerStyle}
        renderItem={({ item, index }) => <ImageCard item={item} index={index} />}
        estimatedItemSize={200}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex :1,
    minHeight: 3,
    width: wp(100)
  },
  listContainerStyle: {
    paddingHorizontal: wp(4)
  }

})

export default ImageGrid;

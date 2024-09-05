// src/screens/ImageItem.js

import React from 'react';
import { Image, StyleSheet } from 'react-native';

const ImageItem = ({ source, style }) => {
  return <Image source={source} style={[styles.image, style]} />;
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
});

export default ImageItem;

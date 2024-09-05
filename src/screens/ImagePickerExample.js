import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Video } from 'expo-av';

const ImagePickerExampleScreen = () => {
  const [media, setMedia] = useState(null);
  const [mediaType, setMediaType] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickMedia = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      const pickedMedia = result.assets[0];
      setMedia(pickedMedia.uri);
      setMediaType(pickedMedia.type);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Pick an image or video from gallery" onPress={pickMedia} />
      {media && mediaType === 'video' ? (
        <Video
          source={{ uri: media }}
          style={{ width: 300, height: 300 }}
          useNativeControls
          resizeMode="contain"
          isLooping
        />
      ) : (
        media && <Image source={{ uri: media }} style={{ width: 300, height: 300 }} />
      )}
    </View>
  );
};

export default ImagePickerExampleScreen;

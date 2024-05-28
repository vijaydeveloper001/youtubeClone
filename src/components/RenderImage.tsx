import {Image, Pressable, StyleSheet} from 'react-native';
import React, {useState, useEffect} from 'react';
import { images } from '../assets/images/images';

type Props = {
  image: any;
  style?: object;
  rest?: object;
  onPress?: () => void; // Fixed typo: onpress -> onPress
};

const RenderImage = ({image, style, onPress, ...rest}: Props) => {
  const [isImage, setIsImage] = useState<boolean>(false);
  useEffect(() => {
    const checkImage = async () => {
      try {
        const response = await fetch(image);
        const contentType = response.headers.get('content-type');
        setIsImage(contentType?.startsWith('image') ?? false);
      } catch (error) {
        setIsImage(false);
      }
    };

    if (image) {
      // Check if image is not null or undefined
      checkImage();
    }
  }, [image]);

  return (
    <Pressable onPress={onPress}>
      {isImage ? (
        <Image
          source={{uri: image}}
          style={[styles.imageStyle, style]}
          {...rest}
        />
      ) : (
        <Image source={image} style={[styles.imageStyle, style]} {...rest} />
      )}
    </Pressable>
  );
};

export default RenderImage;

const styles = StyleSheet.create({
  imageStyle: {
    width: 24,
    height: 24,
  },
});

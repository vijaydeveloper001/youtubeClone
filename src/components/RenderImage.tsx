import {Image, Pressable, StyleSheet} from 'react-native';
import React, {useState, useEffect} from 'react';

type Props = {
  image: any;
  style?: object;
  rest?: object;
};

const RenderImage = ({image, style, ...rest}: Props) => {
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

    checkImage();
  }, [image]);

  return (
    <>
      <Pressable>
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
    </>
  );
};

export default RenderImage;

const styles = StyleSheet.create({
  imageStyle: {
    width: 50,
    height: 50,
  },
});

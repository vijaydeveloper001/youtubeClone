import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {Children} from 'react';
import RenderImage from './RenderImage';
import TypoGraphy from './TypoGraphy';
import {images} from '../assets/images/images';
import {ScrollView} from 'react-native-gesture-handler';

type Props = {
  children: any;
  navigation: any;
};

const AppBaseCom = ({children, navigation}: Props) => {
  return (
    <View style={styles.header}>
      <StatusBar backgroundColor={'#000'} barStyle={'light-content'} />
      <View style={styles.logo}>
        <RenderImage
          image={images.back}
          tintColor={'#fff'}
          onPress={() => navigation.goBack()}
        />
      </View>
      <View style={{flex: 1}}>{children}</View>
    </View>
  );
};

export default AppBaseCom;

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: '#000',
  },
  logo: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    flex: 0.05,
  },
  youtubeText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '400',
    marginLeft: 5,
  },
});

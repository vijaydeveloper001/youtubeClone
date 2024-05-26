import {ScrollView, StyleSheet, View, Animated} from 'react-native';
import React, {useRef} from 'react';
import RenderImage from './RenderImage';
import {images} from '../assets/images/images';
import TypoGraphy from './TypoGraphy';
import Icon from 'ol/style/Icon';

type Props = {
  children: any;
  navigation: any;
};

const AppBaseHome = ({children, navigation}: Props) => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const interpolate = scrollY.interpolate({
    inputRange: [0, 40],
    outputRange: [0, -40],
    extrapolate: 'clamp',
  });

  return (
    <View style={styles.Main}>
      <Animated.ScrollView
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: true},
        )}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        style={{flex: 1}}>
        <Animated.View
          style={[styles.header, {transform: [{translateY: interpolate}]}]}>
          <View style={styles.logo}>
            <RenderImage
              image={images.youtube}
              style={{width: 30, height: 30}}
            />
            <TypoGraphy style={styles.youtubeText}>YOUTUBE</TypoGraphy>
          </View>
          <View style={styles.icons}>
            <RenderImage
              image={images.wifi}
              tintColor={'#fff'}
              style={styles.icon}
            />
            <RenderImage
              image={images.bell}
              tintColor={'#fff'}
              style={styles.icon}
            />
            <RenderImage
              image={images.search}
              tintColor={'#fff'}
              style={styles.icon}
              onPress={() => navigation.navigate('Search')}
            />
          </View>
        </Animated.View>
        {children}
      </Animated.ScrollView>
    </View>
  );
};

export default AppBaseHome;

const styles = StyleSheet.create({
  Main: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 15,
    top: 0,
    left: 0,
    right: 0,
  },
  youtubeText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '400',
    marginLeft: 5,
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 0.35,
  },
  logo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  component: {
    flex: 1,
  },
  icon: {
    width: 20,
    height: 20,
  },
});

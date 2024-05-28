import {
  ScrollView,
  StyleSheet,
  View,
  Animated,
  FlatList,
  Pressable,
  StatusBar,
} from 'react-native';
import React, {useRef, useState} from 'react';
import RenderImage from './RenderImage';
import {images} from '../assets/images/images';
import TypoGraphy from './TypoGraphy';

type Props = {
  children: any;
  navigation: any;
  callbacks?:()=>void
};

const data = [
  {item: 'Brand Collaborations'},
  {item: 'Drone'},
  {item: 'Events'},
  {item: 'Educational'},
  {item: 'Founder'},
  {item: 'Evergreen'},
  {item: 'Sales'},
  {item: 'Testimonial'},
  {item: 'Problem | Solution'},
  {item: 'Product Launch'},
];

const AppBaseHome = ({children, navigation,callbacks}: Props) => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const [indx, setindex] = useState<any>(0);
  const interpolate = scrollY.interpolate({
    inputRange: [0, 40],
    outputRange: [0, -40],
    extrapolate: 'clamp',
  });

  const renderItem = ({item, index}: any) => {
    return (
      <Pressable
        style={[
          styles.headerFlat,
          {backgroundColor: indx == index ? '#fff' : '#6c6d70'},
        ]}
        onPress={() => {setindex(index);callbacks(item?.item)}}>
        <TypoGraphy style={{color: indx == index ? '#000' : '#fff'}}>
          {item?.item}
        </TypoGraphy>
      </Pressable>
    );
  };

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
          style={[styles.headerMain, {transform: [{translateY: interpolate}]}]}>
          <View style={styles.header}>
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
          </View>
          <View>
            <FlatList
              data={data}
              renderItem={renderItem}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{paddingBottom: 20, marginHorizontal: 10}}
              bounces={false}
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
  headerFlat: {
    borderRadius: 5,
    marginRight: 10,
    padding: 5,
  },
});

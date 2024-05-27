import {
  Animated,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import AppBaseHome from '../components/AppBaseHome';
import RenderImage from '../components/RenderImage';
import {images} from '../assets/images/images';
import TypoGraphy from '../components/TypoGraphy';
import {useFetch} from '../api/useFetch';
import YouTubeHomeShimmer from '../components/Shimmer';
import {videoAdded} from '../redux/reducers/videoReducers';
import {useDispatch, useSelector} from 'react-redux';
type Props = {
  navigation: any;
};

const Home = ({navigation}: Props) => {
  return (
    <AppBaseHome
      children={content(navigation)}
      navigation={navigation}
    />
  );
};

const content = (navigation: any) => {
  const [videos, setvideos] = useState<object>([]);
  const dispatch = useDispatch();
  const state = useSelector((state: any) => state?.reducers?.videos);
  const renderItemYoutube = ({item}: any) => {
    return (
      <Pressable
        style={styles.videoCon}
        onPress={() => navigation.navigate('Details', {item: item})}>
        <RenderImage
          image={item.p_image}
          style={styles.image}
          onPress={() => navigation.navigate('Details', {item: item})}
        />
        <View style={styles.videodes}>
          <RenderImage image={item.p_image} style={styles.imageborder} />
          <View style={styles.textdes}>
            <TypoGraphy>{item?.p_name}</TypoGraphy>
            <TypoGraphy style = {styles.timeText}>2 years ago 2m views</TypoGraphy>
          </View>
          <RenderImage
            image={images.more}
            style={styles.imageborders}
            tintColor="#fff"
          />
        </View>
      </Pressable>
    );
  };

  const fetchVideos = async () => {
    await useFetch(
      'https://impactmindz.in/client/boub/back_end/api/product',
      'GET',
    )
      .then(data => {
        dispatch(videoAdded(data?.data['EDITORIAL/BRANDED']));
        // setvideos(data?.data["EDITORIAL/BRANDED"]);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    if (state?.data?.length == 0) {
      fetchVideos();
    }
  }, []);

  return (
    <View style={{flex: 1}}>
      {state?.data?.length > 0 ? (
        <FlatList
          data={state?.data}
          renderItem={renderItemYoutube}
          keyExtractor={(item, index) => index}
          stickyHeaderIndices={[0]}
        />
      ) : (
        <YouTubeHomeShimmer />
      )}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  image: {
    height: 250,
    width: '100%',
  },
  videoCon: {
    height: 300,
    marginBottom: 30,
  },
  videodes: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 0,
    paddingHorizontal: 10,
  },
  imageborder: {
    borderRadius: 999,
    width: 35,
    height: 35,
  },
  textdes: {
    flex: 1,
    paddingHorizontal: 10,
  },
  timeText:{
    fontSize:12
  },
  imageborders:{
    width:20,
    height:20,
  }
});

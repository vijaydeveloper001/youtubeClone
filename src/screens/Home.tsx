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
import BottomSheet from '../components/BottomSheet';
import {checkImage} from '../utils/imagecheck';
type Props = {
  navigation: any;
};

const Home = ({navigation}: Props) => {
  const [filter, setfilter] = useState<any>('Brand Collaborations');
  return (
    <AppBaseHome
      children={content(navigation, filter)}
      navigation={navigation}
      callbacks={(data: string) => setfilter(data)}
    />
  );
};

const content = (navigation: any, filter: any) => {
  const [modal, setmodal] = useState<boolean>(false);
  const [videos, setvideos] = useState<object>([]);
  const dispatch = useDispatch();
  const state = useSelector((state: any) => state?.reducers?.videos);

  const renderItemYoutube = ({item}: any) => {
    // let check =await checkImage(item.p_image)
    // console.log(check)
    const httpsImageUrlRegex = /^https?:\/\//i;
    let check = httpsImageUrlRegex.test(item?.p_image);
    return (
      <Pressable
        style={styles.videoCon}
        onPress={() =>
          navigation.navigate('Details', {item: item, selected: filter})
        }>
        <RenderImage
          image={check ? item.p_image : images.noImage}
          style={styles.image}
          tintColor='red'
          onPress={() => navigation.navigate('Details', {item: item,selected: filter})}
        />
        <View style={styles.videodes}>
          <RenderImage image= {check ? item.p_image : images.youtube}  style={styles.imageborder} />
          <View style={styles.textdes}>
            <TypoGraphy style={{color: '#fff'}}>{item?.p_name}</TypoGraphy>
            <TypoGraphy style={styles.timeText}>
              2 years ago 2m views
            </TypoGraphy>
          </View>
          <RenderImage
            onPress={() => {
              setmodal(true);
            }}
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
      'https://impactmindz.in/client/boub/admin/api/product',
      'GET',
    )
      .then(data => {
        dispatch(
          videoAdded({
            'Brand Collaborations': data?.data['Brand Collaborations'],
            Drone: data?.data['Drone'],
            Events: data?.data['Events'],
            Educational: data?.data['Educational'],
            Founder: data?.data['Founder'],
            Evergreen: data?.data['Evergreen'],
            Sales: data?.data['Sales'],
            Testimonial: data?.data['Testimonial'],
            'Problem | Solution': data?.data['Problem | Solution'],

            'Product Launch': data?.data['Product Launch'],
          }),
        );
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
    return () => {
      setmodal(false);
    };
  }, []);

  return (
    <View style={{flex: 1}}>
      {state?.data[filter]?.length > 0 ? (
        <FlatList
          data={state?.data[filter]}
          renderItem={renderItemYoutube}
          keyExtractor={(item, index: any) => index}
          stickyHeaderIndices={[0]}
        />
      ) : (
        <YouTubeHomeShimmer />
      )}
      <BottomSheet isOpen={modal} onClose={() => setmodal(false)} />
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
  timeText: {
    fontSize: 12,
    color: '#fff',
  },
  imageborders: {
    width: 20,
    height: 20,
  },
});

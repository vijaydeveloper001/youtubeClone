import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Pressable,
  ScrollView,
} from 'react-native';
import {WebView} from 'react-native-webview';
import TypoGraphy from '../components/TypoGraphy';
import {images} from '../assets/images/images';
import RenderImage from '../components/RenderImage';
import {useDispatch, useSelector} from 'react-redux';
import {videoAdded} from '../redux/reducers/videoReducers';
import YouTubeItemShimmer from '../components/Shimmer';
type Props = {
  route: any;
};

const data = [
  {
    img: images.likes,
    text: 'Like',
  },
  {
    img: images.share,
    text: 'Share',
  },
  {
    img: images.save,
    text: 'Save',
  },
  {
    img: images.download,
    text: 'Download',
  },
  {
    img: images.report,
    text: 'Report',
  },
];

const VideoDetails = ({route}: Props) => {
  const {item, selected} = route.params;
  const dispatch = useDispatch();
  const [likesobject, setLikesObject] = useState<any>(null);
  const videosState = useSelector((state: any) => state.reducers.videos);
  const [itemStore, setitemStore] = useState<any>(null);
  useEffect(() => {
    const likedItem = videosState.data[selected]?.find(
      (video: any) => video.p_id === item.p_id,
    );
    setLikesObject(likedItem);
  }, [itemStore, item]);

  const handleLike = () => {
    const updatedVideos = videosState.data[selected]?.map((video: any) => {
      if (video.p_id === item.p_id) {
        return {...video, Like: !video.Like};
      }
      return video;
    });
    delete videosState?.data[selected];
    dispatch(videoAdded({...videosState?.data, [selected]: updatedVideos}));
    setLikesObject((prevLikes: any) => ({...prevLikes, Like: !prevLikes.Like}));
  };

  const renderItem = ({item}: any) => {
    return (
      <Pressable
        style={styles.itemCon}
        onPress={() => (item.text === 'Like' ? handleLike() : () => {})}>
        <TypoGraphy style={styles.itemText}>{item.text}</TypoGraphy>
        <View style={{marginHorizontal: 10}} />
        <RenderImage
          image={item.img}
          style={styles.img}
          tintColor={
            item.text === 'Like' ? (likesobject?.Like ? 'red' : '#fff') : '#fff'
          }
        />
      </Pressable>
    );
  };

  const renderItemYoutube = ({item}: any) => {

    const httpsImageUrlRegex = /^https?:\/\//i;
    let check = httpsImageUrlRegex.test(item?.p_image);
    return (
      <Pressable style={styles.videoCon} onPress={() => setitemStore(item)}>
        <RenderImage
          image={check ? item.p_image : images.noImage}
          style={styles.image}
          resizeMethod={'cantion'}
        />
        <View style={styles.videodes}>
          <RenderImage image={check ? item.p_image : images.noImage} style={styles.imageborder} />
          <View style={styles.textdes}>
            <TypoGraphy style={{color: '#fff'}}>{item?.p_name}</TypoGraphy>
            <TypoGraphy style={{color: '#fff'}}>{item?.cat_name}</TypoGraphy>
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

  return (
    <View style={styles.main}>
      <View style={{height: 300}}>
        {item ? (
          <WebView
            source={{uri: itemStore ? itemStore.url : item.url}}
            style={{flex: 1}}
            containerStyle={styles.backgroundVideo}
          />
        ) : (
          <Text>Loading video...</Text>
        )}
      </View>
      <View style={styles.mainInCON}>
        <TypoGraphy style={styles.pName}>
          {itemStore ? itemStore?.p_name : item?.p_name}
        </TypoGraphy>
        <TypoGraphy style={styles.time}>1m views 5mo ago</TypoGraphy>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.videodescON}>
          <RenderImage image={images?.youtube} style={styles.imageborder} />
          <View style={styles.textdes}>
            <TypoGraphy>{item?.p_name}</TypoGraphy>
            <TypoGraphy style={{fontSize: 12}}>1 core subscriber</TypoGraphy>
          </View>
          <Pressable style={styles.subscribe}>
            <TypoGraphy style={{color: '#000'}}>Subscribe</TypoGraphy>
          </Pressable>
        </View>
        <View>
          <FlatList
            data={data}
            renderItem={renderItem}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{paddingVertical: 10}}
          />
        </View>
        <View style={{flex: 1}}>
          <FlatList
            data={videosState?.data[selected]}
            renderItem={renderItemYoutube}
            keyExtractor={(item, index) => index}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    backgroundColor: '#fff',
    height: 300, // Adjust height as needed
    width: '100%', // Full width
  },
  main: {
    flex: 1,
    backgroundColor: '#000',
  },
  pName: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    paddingVertical: 10,
  },
  mainInCON: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  image: {
    height: 250,
    width: '100%',
  },
  time: {
    fontSize: 10,
    fontWeight: '200',
  },
  itemText: {
    fontWeight: '400',
    color: '#fff',
  },
  img: {
    width: 20,
    height: 20,
  },
  itemCon: {
    padding: 10,
    backgroundColor: '#000',
    elevation: 5,
    shadowColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    marginRight: 20,
  },
  videodescON: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
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
  },
  imageborders: {
    width: 20,
    height: 20,
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
  subscribe: {
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingVertical: 5,
    paddingHorizontal: 12,
  },
});

export default VideoDetails;

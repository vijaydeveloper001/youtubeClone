import React, {useEffect, useRef, useState} from 'react';
import {StyleSheet, View, Text, FlatList, Pressable} from 'react-native';
import Video, {VideoRef} from 'react-native-video';
import RNFetchBlob from 'rn-fetch-blob';
import {WebView} from 'react-native-webview';
import TypoGraphy from '../components/TypoGraphy';
import {images} from '../assets/images/images';
import RenderImage from '../components/RenderImage';
import { useDispatch, useSelector } from 'react-redux';
import videoReducers, { videoAdded } from '../redux/reducers/videoReducers';
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
  const items = route?.params?.item;
  const videoRef = useRef<VideoRef>(null);
  const [likesobject, setlikesobject] = useState('')
  const dispatch = useDispatch();
  const state = useSelector((state: any) => state?.reducers?.videos);


  const likesfunciton = (item:any)=>{
    let splice = state?.data?.filter((item:any)=>item?.p_id!==items?.p_id)
    
    dispatch(videoAdded([...splice,{...item,Like:item?.Like?!item?.Like:false}]))
    setlikesobject({...item,Like:!likesobject?.Like})
  }

  useEffect(()=>{
    let filter = state?.data?.filter((item:any)=>item?.p_id==items?.p_id)
    setlikesobject(filter[0])
  },[])

  const RenderItem = ({item}: any) => {
    return (
      <Pressable style={styles.itemCon} onPress={()=>item?.text=='Like'?likesfunciton(items):()=>{}}>
        <TypoGraphy style={styles.itemText}>{item?.text}</TypoGraphy>
        <View style={{marginHorizontal: 10}} />
        <RenderImage image={item?.img} style={styles.img} tintColor={item?.text=='Like'?likesobject?.Like?'red':'#fff':'#fff'} />
      </Pressable>
    );
  };

  return (
    <View style={styles.main}>
      <View style={{height: 300}}>
        {items ? (
          <WebView
            source={{uri: items?.url}}
            style={{flex: 1}}
            containerStyle={styles.backgroundVideo}
          />
        ) : (
          <Text>Loading video...</Text>
        )}
      </View>
      <View style={styles.mainInCON}>
        <TypoGraphy style={styles.pName}>{items?.p_name}</TypoGraphy>
        <TypoGraphy style={styles.time}>1m views 5mo ago</TypoGraphy>
      </View>
      <View>
        <FlatList
          data={data}
          renderItem={RenderItem}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingVertical: 10}}
        />
      </View>
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
});

export default VideoDetails;

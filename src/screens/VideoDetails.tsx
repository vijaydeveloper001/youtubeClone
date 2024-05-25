import React, {useEffect, useRef, useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Video, {VideoRef} from 'react-native-video';
import RNFetchBlob from 'rn-fetch-blob';
import {WebView} from 'react-native-webview';
import TypoGraphy from '../components/TypoGraphy';
type Props = {
  route: any;
};

const VideoDetails = ({route}: Props) => {
  const item = route?.params?.item;
  const videoRef = useRef<VideoRef>(null);
  const [videoPath, setVideoPath] = useState('');
  console.log(item);

  async function getVimeoLinks(url: string) {
    await fetch(`https://vimeo.com/api/oembed.json?url=${url}`, {
      headers: {
        'content-type': 'application/json',
        accept: 'application/json',
      },
    }).then(async r => {
      let response = await r.json();
      const html = response.html;
      const regex = /src="([^"]+)"/;
      const match = html.match(regex);

      if (match && match.length >= 2) {
        const videoUrl = match[1];
        setVideoPath(videoUrl + '.m4v');
      } else {
        console.error('Unable to extract video URL from HTML');
      }
      console.log(response, 'sdfdsfds');
    });
  }
  useEffect(() => {
    getVimeoLinks(item?.url);
  }, []);

  return (
    <View style={styles.main}>
       <View style = {{height:300}}>
      {item ? (
        <WebView
          source={{uri: item?.url}}
          style={{flex: 1}}
          containerStyle={styles.backgroundVideo}
        />
      ) : (
        <Text>Loading video...</Text>
      )}
      </View>
      <TypoGraphy style={{color:'#fff'}}>{item?.p_name}</TypoGraphy>
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
});

export default VideoDetails;

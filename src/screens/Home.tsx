import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import AppBaseHome from '../components/AppBaseHome';
import RenderImage from '../components/RenderImage';
import {images} from '../assets/images/images';
import TypoGraphy from '../components/TypoGraphy';
import {useFetch} from '../api/useFetch';

type Props = {};

const Home = ({}: Props) => {
  return <AppBaseHome children={content()} />;
};

const content = () => {
  const [videos, setvideos] = useState<object>([]);
  const renderItemYoutube = ({item}: any) => {
    console.log(item);
    return (
      <View style={styles.videoCon}>
        <RenderImage
          image={item.p_image}
          style={styles.image}
          resizeMethod={'cantion'}
        />
        <View style={styles.videodes}>
          <RenderImage image={item.p_image} style={styles.imageborder} />
          <View style={styles.textdes}>
            <TypoGraphy>{item?.p_name}</TypoGraphy>
            <TypoGraphy>{item?.cat_name}</TypoGraphy>
          </View>
          <RenderImage
            image={images.more}
            style={styles.imageborder}
            tintColor="#fff"
          />
        </View>
      </View>
    );
  };

  const fetchVideos = async () => {
    await useFetch(
      'https://impactmindz.in/client/boub/back_end/api/product',
      'GET',
    )
      .then(data => {
        setvideos(data?.data['EDITORIAL/BRANDED']);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    fetchVideos();
  }, []);
  return (
    <View>
      <FlatList
        data={videos}
        renderItem={renderItemYoutube}
        keyExtractor={(item, index) => index}
      />
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
    marginBottom: 10,
  },
  videodes: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 0,
    paddingHorizontal: 10,
  },
  imageborder: {
    borderRadius: 999,
    width: 30,
    height: 30,
  },
  textdes: {
    flex: 1,
    paddingHorizontal: 10,
  },
});

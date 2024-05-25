import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import RenderImage from './RenderImage';
import {images} from '../assets/images/images';
import TypoGraphy from './TypoGraphy';
import Icon from 'ol/style/Icon';

type Props = {
  children: any;
};

const AppBaseHome = ({children}: Props) => {
  return (
    <View style={styles.Main}>
      <View style={styles.header}>
        <View style={styles.logo}>
          <RenderImage image={images.youtube} />
          <TypoGraphy style={styles.youtubeText}>YOUTUBE</TypoGraphy>
        </View>
        <View style={styles.icons}>
          <RenderImage image={images.wifi}  tintColor ={'#fff'} style={styles.icon}/>
          <RenderImage image={images.bell}  tintColor ={'#fff'} style={styles.icon}/>
          <RenderImage image={images.search}  tintColor ={'#fff'} style={styles.icon}/>
        </View>
      </View>
    
        <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}>
          {children}
        </ScrollView>
      
    </View>
  );
};

export default AppBaseHome;

const styles = StyleSheet.create({
  Main: {
    flex: 1,
  
  },
  header: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal:10
  },
  youtubeText: {
    fontSize: 15,
    color: '#fff',
    fontWeight:'600'
  },
  icons: {
    flexDirection: 'row',
    justifyContent:"space-between",
    flex:0.4
  },
  logo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  component: {
    flex: 1,
  },
  icon:{
    width:25,
    height:25,

  }
});

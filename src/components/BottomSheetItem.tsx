import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import RenderImage from './RenderImage';
import { images } from '../assets/images/images';
import TypoGraphy from './TypoGraphy';

type Props = {
    onPress?:()=>void,
    text:String,
    img:any

};

const BottomSheetItem = ({onPress,img,text}: Props) => {
  return (
    <Pressable style={styles.pressCon} onPress={onPress}>
      <RenderImage image={img} tintColor={'#fff'} />
      <TypoGraphy style={styles.text}>{text}</TypoGraphy>
    </Pressable>
  );
};

export default BottomSheetItem;

const styles = StyleSheet.create({
    text:{
        color:'#fff',
        fontSize:18,
        marginHorizontal:10
      },
      pressCon:{
        flexDirection:'row',
        alignItems:"center",
        marginTop:30
      }
});

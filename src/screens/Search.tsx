import {FlatList, Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import RenderImage from '../components/RenderImage';
import {images} from '../assets/images/images';
import TypoGraphy from '../components/TypoGraphy';

type Props = {};

const Search = (props: Props) => {
    const renderitem = ()=>{
        return (
            <Pressable style = {styles.flatCon}>
                <RenderImage image={images.youtube} />
                <TypoGraphy style={styles.textSearch}>Oggy in English</TypoGraphy>
                <RenderImage image={images.youtube} />
            </Pressable>
        )
    }
  return (
    <View style={styles.main}>
      <View style={styles.inputCon}>
        <RenderImage image={images.back} tintColor={'#fff'} />
        <TextInput style={styles.inputStyle} placeholder="Search Youtube" />
        <RenderImage image={images.voice} tintColor={'#fff'} />
      </View>
      <View>
        <FlatList data={[1,2,3,4,54]} renderItem={renderitem}/>
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#000',
    paddingHorizontal: 10,
  },
  inputStyle: {
    flex: 1,
    backgroundColor: '#111111',
    marginHorizontal: 20,
    borderRadius: 5,
    height: 40,
    padding: 10,
  },
  inputCon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flatCon:{
    flexDirection:"row",
    alignItems:"center",
    marginTop:20
  },
  textSearch:{
    fontSize:15,
    marginHorizontal:30,
    flex:1
  }
});

import {
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import RenderImage from '../components/RenderImage';
import {images} from '../assets/images/images';
import TypoGraphy from '../components/TypoGraphy';
import {useSelector} from 'react-redux';

type Props = {
  navigation: any;
};

const Search = ({navigation}: Props) => {
  const state = useSelector((state: any) => state?.reducers?.videos);
  const [data, setdata] = useState<any>([]);
  const renderitem = ({item}: any) => {
   
    return (
      <Pressable
        style={styles.flatCon}
        onPress={() => navigation.navigate('Details', {item: item})}>
        <RenderImage image={images.youtube} />
        <TypoGraphy style={styles.textSearch}>{item?.p_name}</TypoGraphy>
        <RenderImage image={item?.p_image} />
      </Pressable>
    );
  };
  const filter = (text: string) => {
    let arrayFilter = state?.data?.filter((item: object) =>
      item?.p_name?.toLowerCase()?.includes(text?.toLowerCase()),
    );
    setdata(arrayFilter);
  };
  return (
    <View style={styles.main}>
      <View style={styles.inputCon}>
        <RenderImage image={images.back} tintColor={'#fff'} />
        <TextInput
          style={styles.inputStyle}
          placeholder="Search Youtube"
          onChangeText={filter}
        />
        <RenderImage image={images.voice} tintColor={'#fff'} />
      </View>
      <View>
        <FlatList
          data={data?.length > 0 ? data : state.data}
          renderItem={renderitem}
          contentContainerStyle={{paddingBottom: 100}}
        />
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
  flatCon: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  textSearch: {
    fontSize: 15,
    marginHorizontal: 30,
    flex: 1,
  },
});

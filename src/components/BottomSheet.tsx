import React, {useEffect, useRef} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import RenderImage from './RenderImage';
import {images} from '../assets/images/images';
import TypoGraphy from './TypoGraphy';
import BottomSheetItem from './BottomSheetItem';

interface props {
  isOpen: boolean;
  onClose: () => void;
}

const BottomSheetExample = ({isOpen, onClose}: props) => {
  const refRBSheet = useRef<RBSheet>(null);
  useEffect(() => {
    if (isOpen && refRBSheet.current) {
        refRBSheet.current.open();
      }
  }, [isOpen]);

  useEffect(() => {
    onClose();
  }, [!isOpen]);
  return (
    <RBSheet ref={refRBSheet} customStyles={{container: styles.rbSheetStyle}} >
      <View style={styles.container}>
        <BottomSheetItem
          img={images.save}
          text={'Save'}
          onPress={() => refRBSheet?.current?.close()}
        />

        <BottomSheetItem
          img={images.download}
          text={'Download'}
          onPress={() => refRBSheet?.current?.close()}
        />

        <BottomSheetItem
          img={images.share}
          text={'Share'}
          onPress={() => refRBSheet?.current?.close()}
        />

        <BottomSheetItem
          img={images.report}
          text={'Report'}
          onPress={() => refRBSheet?.current?.close()}
        />
      </View>
    </RBSheet>
  );
};

export default BottomSheetExample;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingHorizontal: 10,
    backgroundColor: '#4d4b49',
    paddingVertical: 10,
  },
  contentContainer: {
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'white',
  },
  rbSheetStyle: {
    borderRadius: 20,
  },
});

import React, { useCallback, useMemo, useRef, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { BottomSheetModal, BottomSheetView ,BottomSheetModalProvider} from '@gorhom/bottom-sheet';

const BottomSheetExample = () => {
  const bottomSheetRef = useRef<BottomSheetModal>(null);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetRef.current?.present();
  }, []);

  const snapPoints = useMemo(() => ['25%', '50%'], []);

  useEffect(() => {
    handlePresentModalPress();
  }, []);

  return (
    <BottomSheetModalProvider >
      <BottomSheetModal
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        index={0}>
        <BottomSheetView style={styles.contentContainer}>
          <Text>Awesome 🎉</Text>
        </BottomSheetView>
      </BottomSheetModal>
      </BottomSheetModalProvider>
  );
};

export default BottomSheetExample;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  contentContainer: {
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'white',
  },
});

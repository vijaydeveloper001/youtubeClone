import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';

const YouTubeItemShimmer = () => {
  return (
    <View style={styles.videoCon}>
      {/* Placeholder for the image */}
      <ScrollView horizontal={false} style={{flex: 1}}>
        {[1, 2, 3, 4].map((item, index) => {
          return (
            <View key={index} style={{height: 300, marginBottom: 20}}>
              <ShimmerPlaceHolder
                style={styles.image}
                autoRun={true}
                visible={false} // Set to true when data is loaded
                LinearGradient={LinearGradient}
              />
              <View style={styles.videodes}>
                {/* Placeholder for the circular image */}
                <ShimmerPlaceHolder
                  style={styles.imageborder}
                  autoRun={true}
                  visible={false}
                  LinearGradient={LinearGradient}
                />
                <View style={styles.textdes}>
                  {/* Placeholder for the title */}
                  <ShimmerPlaceHolder
                    style={[styles.typography, {width: '80%', marginBottom: 8}]}
                    autoRun={true}
                    visible={false} // Set to true when data is loaded
                    LinearGradient={LinearGradient}
                  />
                  {/* Placeholder for the category name */}
                  <ShimmerPlaceHolder
                    style={[styles.typography, {width: '60%'}]}
                    autoRun={true}
                    visible={false} // Set to true when data is loaded
                    LinearGradient={LinearGradient}
                  />
                </View>
                {/* Placeholder for the 'more' icon */}
                <ShimmerPlaceHolder
                  style={styles.imageborder}
                  autoRun={true}
                  visible={false} // Set to true when data is loaded
                  LinearGradient={LinearGradient}
                />
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 250,
    width: '100%',
    backgroundColor:'#111111'
  },
  videoCon: {
    flex: 1,
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
  typography: {
    height: 20, // Adjust the height as needed
    backgroundColor: '#111111', // Background color for the placeholder
  },
});

export default YouTubeItemShimmer;

import {StyleSheet, Text} from 'react-native';
import React from 'react';

type Props = {
  children: any;
  style?: object;
  rest?: object;
};

const TypoGraphy = ({children, style, ...rest}: Props) => {
  return (
    <Text style={[styles.textStyle, style]} {...rest}>
      {children}
    </Text>
  );
};

export default TypoGraphy;

const styles = StyleSheet.create({
  textStyle: {},
});

import React from 'react';
import {View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  wing: {
    // paddingRight: 16,
    // paddingLeft: 16,
    paddingHorizontal: 16,
    paddingVertical: 16,
    flex: 1,
  },
});

const WingBlank = ({style, children, ...resetProps}) => (
  <View style={[styles.wing, style]} {...resetProps}>
    {children}
  </View>
);

export default WingBlank;

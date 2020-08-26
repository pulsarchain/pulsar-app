import React from 'react';
import {View} from 'react-native';
import {elevate} from 'react-native-elevate';

const getShadowStyle = (radius, style) => {
  return {
    backgroundColor: '#fff',
    borderRadius: radius,
    ...style,
  };
};

const BoxShadow = ({children, elevation = 5, radius = 5, style}) => {
  return (
    <View style={[getShadowStyle(radius, style), elevate(elevation)]}>
      {children}
    </View>
  );
};
export default BoxShadow;

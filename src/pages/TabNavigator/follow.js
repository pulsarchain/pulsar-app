import React from 'react';
import {View, Text} from 'native-base';
import createStackNavigator from '@/components/createStackNavigator';

class Follow extends React.PureComponent {
  render() {
    return (
      <View>
        <Text>Follow</Text>
      </View>
    );
  }
}

export default createStackNavigator({Follow});
